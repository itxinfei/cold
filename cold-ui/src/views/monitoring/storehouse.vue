<template>
  <div class="app-container">
    <div class="topLable">
      <div class="tit"><i class="icon">&#xe610;</i> <span >仓库实时数据</span> <span class="time">{{time}} 秒后自动刷新</span></div>
      <div class="info">
        <div :class="{butItem: true, active: act === '0'}"  @click="seachCondition('st', '0')">全部 35</div>
        <div :class="{butItem: true, active: act === '1'}"  @click="seachCondition('st', '1')">合格 35</div>
        <div :class="{butItem: true, active: act === '2'}"  @click="seachCondition('st', '2')">报警中 35</div>
        <div :class="{butItem: true, active: act === '3'}"  @click="seachCondition('st', '3')">未监控 35</div>
        <el-select class="select" v-model="companyId"  @change="seachCondition('com','0')" size="mini" filterable placeholder="企业仓库">
          <el-option
            v-for="item in options"
            :key="item.id"
            :label="item.company"
            :value="item.id">
          </el-option>
        </el-select>
      </div>
    </div>
    <div class="content">
      <div class="itemBox">
        <div class="items" v-for="item in list" v-bind:key="item.id">
          <div :class="{tit: true, 'titbg': item.state == 0}"><span>{{item.housename}}</span> <i v-if="item.state != 0" class="icon" @click="actionHandle(item.id)" style="font-size: 16px;color:#186bd0;cursor: pointer;">&#xe605;</i> </div>
          <div class="tem"><span><i class="icon" style="font-size: 18px">&#xe88c;</i> <span :class="{'col': item.state == 1}">{{item.tem}}</span> ℃</span> <span>{{item.mintem}}/{{item.maxtem}}</span></div>
          <div class="hum"><span><i class="icon">&#xeb3a;</i> <span :class="{'col': item.state == 2}">{{item.hum}}</span> %</span> <span>{{item.minhum}}/{{item.maxhum}}</span></div>
        </div>
      </div>
      <el-pagination
        v-if="total"
        class="pageList"
        background
        layout="prev, pager, next"
        @current-change="handleCurrentChange"
        :total="Number(total)">
      </el-pagination>
    </div>
    <!--新增 修改 主机 -->
    <el-dialog class="meterAdd" :title="title" :visible.sync="dialogFormVisible">
      <el-form :model="form" :inline="true"  size="mini">
        <el-form-item label="处理方式" :label-width="formLabelWidth">
          <el-select v-model="form.operation" placeholder="请选择处理方式">
            <el-option label="偶见异常观察中" value="偶见异常观察中"></el-option>
            <el-option label="故障中等待维修" value="故障中等待维修"></el-option>
            <el-option label="开空调" value="开空调"></el-option>
            <el-option label="开风幕机" value="开风幕机"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitHandle">保存</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { getStorehouseMonitor, setOperation } from '@/api/monitor'
import { getCompanyList } from '@/api/admin'
import { IListData } from '@/api/types'

@Component({
  name: 'storehouse'
})
export default class extends Vue {
  private list: IListData[] = []
  private total: number = 0
  private listLoading = true
  private companyId = ''
  private dialogFormVisible = false
  private time:number = 60
  private act:string = '0'
  private options = []
  private actionId: string = ''
  private value= ''
  private title = '报警处理措施'
  private listQuery = {
    page: 1,
    pagesize: 10,
    companyId: '0',
    state: 0
  }
  private initForm = {
    operation: ''
  }
  private formLabelWidth = '120px'
  private form = { ...this.initForm }
  created() {
    this.listQuery.companyId = String(this.$route.query.id == undefined?"":this.$route.query.id )
    this.listQuery.pagesize = 1000
    this.getList()
    this.getCompany()
    let _this = this
    let time = setInterval(() => {
      if (_this.time <= 0) {
        this.getList()
        _this.time = 60
      } else {
        _this.time--
      }
    }, 1000)
  }
  private async submitHandle() {
    if (this.form.operation) {
      const { data } = await setOperation({ id: this.actionId, ...this.form })
      this.$message({
        type: 'success',
        message: '处理成功!'
      })
      this.getList()
      this.dialogFormVisible = false
    } else {
      this.$message({
        type: 'success',
        message: '请选择处理方法!'
      })
    }
  }
  private async getList() {
    this.listLoading = true
    const { data } = await getStorehouseMonitor(this.listQuery)
    this.total = data.total
    this.list = data.items
    this.listLoading = false
  }
  private async getCompany() {
    const queryData = {
      page: 1,
      pagesize: 100
    }
    const { data } = await getCompanyList(queryData)
    this.options = data.items

    this.companyId = String(this.$route.query.id)
  }
  private async handleCurrentChange(page:number) {
    this.listQuery.page = page
    this.getList()
  }
  private actionHandle(id: string) {
    this.actionId = id
    this.dialogFormVisible = true
  }
  private async seachCondition(st:string, dat:any) {
    if (st == 'com') {
      this.listQuery.companyId = this.companyId
    }
    if (st == 'st') {
      this.listQuery.state = dat
      this.act = String(dat)
    }
    this.getList()
  }
}
</script>
<style lang="scss" scoped>
  .app-container{
    border-top: solid 1px #6fa5e7;
    .topLable{
      margin-bottom: 15px;
      position: relative;
      display: flex;
      justify-content: space-between;
      position: relative;
      color:#fff;
      font-size: 14px;
      .tit{
        font-weight: bold;
        font-size: 16px;
        line-height: 30px;
      }
      .info{
        color:#fff;
        display: flex;
        text-align: center;
        font-size: 12px;
        line-height: 1.5;
        .butItem{
          padding: 4px 15px;
          margin: 0 5px;
          border: solid 1px #fff;
          border-radius: 3px;
        }
        .select{
          margin-left: 5px;
        }
      }
      .time{
        margin-left: 40px;
        font-size: 14px;
      }
    }
    .content{
      background: #fff;
      padding: 15px;
      border-radius: 5px;
      min-height: 740px;
      .itemBox{
        display: flex;
        flex-wrap: wrap;
        align-content:flex-start;
      }
      .items{
        width: 18%;
        margin: 10px 1%;
        height: 123px;
        border-radius: 5px;
        box-shadow: 0 0 5px #ccc;
        line-height: 40px;
        .icon{
          display: inline-block;
          color: #27c7d8;
          font-size: 24px;
          width: 24px;
          text-align: center;
        }
        .tit{
          padding:0 15px;
          display: flex;
          justify-content: space-between;
          line-height: 40px;
          color:#186bd0;
        }
        .titbg{
          background:#e7f0fa;
        }
        .icon{
          position: relative;
          top:2px;
        }
        .hum{
          margin:0 15px;
          display: flex;
          justify-content: space-between;
        }
        .tem{
          margin:0 15px;
          border-bottom: solid 1px #e7f0fa;
          display: flex;
          justify-content: space-between;
        }
        .col{
          color:#f00;
        }
      }
    }
    .active{
      color:#27c7d8;
      border-color: #27c7d8 !important;
    }
    .pageList{
      text-align: right;
      margin: 10px 0;
    }
  }
</style>
