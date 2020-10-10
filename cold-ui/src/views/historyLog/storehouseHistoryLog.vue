<template>
  <div class="app-container">
    <div class="topLable">
      <div class="tit"><span><i class="icon">&#xe610;</i> 仓储历史记录</span> </div>
      <div class="info">
        <div class="butItem">
          <span class="label">编号</span>
          <el-input v-model="listQuery.metercode" @input="setNumber" size="mini" placeholder="请输入编号"></el-input>
        </div>
        <div class="butItem">
          <span class="label">开始时间</span>
          <el-date-picker
          v-model="listQuery.stTime"
          size="mini"
          type="date"
          @change="setStTime"
          placeholder="选择日期">
        </el-date-picker></div>
        <div class="butItem">
          <span class="label">结束时间</span>
          <el-date-picker
            size="mini"
            @change="setEndTime"
            v-model="listQuery.endTime"
            type="date"
            placeholder="选择日期">
          </el-date-picker></div>
      </div>
    </div>
    <div class="content">
      <el-table v-loading="listLoading" :data="list" element-loading-text="Loading" style="width: 100%">
        <el-table-column align="center" label="编号" width="80" >
          <template slot-scope="scope"> {{ scope.row.number }} </template>
        </el-table-column>
        <el-table-column label="企业名称" prop="company" />
        <el-table-column label="管理主机号" prop="hostCode" />
        <el-table-column label="仪表名称" prop="meterName" />
        <el-table-column label="温度" align="center" prop="tem" width="80" />
        <el-table-column label="湿度" align="center" prop="hum" width="80"/>
        <el-table-column label="采集日期" align="center" width="210">
          <template slot-scope="scope"> {{ scope.row.time | parseTime }}</template>
        </el-table-column>
        <el-table-column label="操作" prop="" align="center" width="160">
          <template slot-scope="scope">
            <span class="action" @click="changeHandel(scope.row, 'tem')"> 温度曲线图 </span>
            <span class="action" @click="changeHandel(scope.row, 'hum')"> 湿度曲线图 </span>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        class="pageList"
        background
        layout="prev, pager, next"
        @current-change="handleCurrentChange"
        :total="Number(total)">
      </el-pagination>
    </div>
    <!--新增 修改 主机 -->
    <el-dialog class="meterAdd" :title="title" :visible.sync="dialogFormVisible">
      <LineChart width="100%" :data="dataItem"></LineChart>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { getDruidList } from '@/api/log'
import { IArticleData } from '@/api/types'
import LineChart from '@/components/Charts/LineChart.vue'
@Component({
  name: 'historyLog',
  filters: {
    parseTime: (timestamp: string) => {
      let date = new Date(timestamp)
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDay()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    }
  },
  components: {
    LineChart
  }
})
export default class extends Vue {
  private list: IArticleData[] = []
  private listLoading = true
  private dialogFormVisible = false
  private total = 0
  private dataItem = {}
  private title = '温度曲线'
  private listQuery = {
    page: 1,
    pagesize: 10,
    metercode: '',
    houseid: '',
    companyid: '',
    stTime: '',
    endTime: ''
  }
  created() {
    this.getList()
  }
  // 列表数据获取
  private async getList() {
    this.listLoading = true
    const { data } = await getDruidList(this.listQuery)
    console.log(data.items)
    this.list = data.items
    // this.total = data.total
    this.listLoading = false
  }
  // 分页切换
  private async handleCurrentChange(page:any) {
    this.listQuery.page = page
    this.getList()
  }
  // 选择编号
  private async setNumber() {
    this.listQuery.page = 1
    this.listQuery.pagesize = 10
    this.getList()
  }
  // 选择时间
  private async setStTime(time:any) {
    if (this.listQuery.endTime && time > this.listQuery.endTime) {
      this.listQuery.stTime = this.listQuery.endTime
    }
    if (this.listQuery.endTime) {
      this.listQuery.page = 1
      this.listQuery.pagesize = 10
      this.getList()
    }
  }
  private async setEndTime(time:any) {
    if (this.listQuery.stTime && time < this.listQuery.stTime) {
      this.listQuery.endTime = this.listQuery.stTime
    }
    if (this.listQuery.stTime) {
      this.listQuery.page = 1
      this.listQuery.pagesize = 10
      this.getList()
    }
  }
  // 温湿度曲线
  private async changeHandel(row:any, type:string) {
    this.dialogFormVisible = true
    if (type === 'tem') {
      this.title = '温度曲线'
      this.dataItem = {
        name: '温度',
        xAxis: ['13:00', '13:05', '13:10', '13:15', '13:20', '13:25', '13:30', '13:35', '13:40', '13:45', '13:50', '13:55'],
        data: [12, 11, 12, 15, 12, 16, 12, 22, 18, 19, 13, 15]
      }
    } else {
      this.title = '湿度曲线'
      this.dataItem = {
        name: '湿度',
        xAxis: ['13:00', '13:05', '13:10', '13:15', '13:20', '13:25', '13:30', '13:35', '13:40', '13:45', '13:50', '13:55'],
        data: [120, 110, 125, 145, 122, 165, 122, 220, 182, 191, 134, 150]
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .el-input--mini{
    width: 100px !important;
  }
  .el-date-editor.el-input, .el-date-editor.el-input__inner{
    width: 135px !important;
  }
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
        .label{
          display: inline-block;
          padding: 0 10px;
          margin: 5px;
        }
        .butItem{
          margin-left: 10px;
        }
        .seach{
          margin-left: 5px;
        }
      }
    }
    .content{
      background: #fff;
      padding: 15px;
      border-radius: 5px;
      min-height: 610px;
      .action{
        color:#186bd0 !important;
        cursor: pointer;
      }
      .pageList{
        text-align: right;
        margin: 10px 0;
      }
    }
  }
</style>
