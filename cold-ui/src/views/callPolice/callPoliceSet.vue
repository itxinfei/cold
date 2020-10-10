<template>
  <div class="app-container">
    <div class="topLable">
      <div class="tit"><span><i class="icon">&#xe610;</i> 报警配置</span> </div>
      <div class="info">
        <div class="butItem" @click="changeHandel()">+新增</div>
        <el-input class="seach" v-model="listQuery.username" @input="getList" size="mini" placeholder="请输入编号查询"></el-input>
      </div>
    </div>
    <div class="content">
      <el-table v-loading="listLoading" :data="list" align="center" element-loading-text="Loading" style="width: 100%">
        <el-table-column label="人员姓名" prop="username" align="center" />
        <el-table-column label="人员电话" prop="userphone" align="center" />
        <el-table-column label="监控主机" prop="hostname" align="center" />
        <el-table-column label="操作" prop="" align="center">
          <template slot-scope="scope">
            <span class="action" @click="changeHandel(scope.row)"> 修改 </span>
            <span class="action" @click="delHandel(scope.row.id)"> 删除 </span>
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
      <el-form :model="formData" :rules="rules" ref="formData" :inline="true"  size="mini">
        <el-form-item style="display: none;">
          <el-input type="hidden" v-model="formData.hostcode" autocomplete="off"></el-input>
          <el-input type="hidden" v-model="formData.hostname" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="人员姓名" :label-width="formLabelWidth" prop="username">
          <el-input v-model="formData.username" autocomplete="off" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="手机号" :label-width="formLabelWidth" prop="userphone">
          <el-input v-model="formData.userphone" autocomplete="off" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item label="监控类型" :label-width="formLabelWidth">
          <el-radio-group v-model="formData.monitorstate">
            <el-radio label="0">温湿度</el-radio>
            <el-radio label="1">温度</el-radio>
            <el-radio label="2">湿度</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="预警主机:" prop="hostid" :label-width="formLabelWidth">
          <el-select v-model="formData.hostid" placeholder="请选择预警的主机">
            <el-option v-for="item in hostList" :key="item.id" :label="item.hostname" :value="item.id" @click.native="hostChange(item)"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitHandle('formData')">保存</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { getWarningsetList, addWarningset, putWarningset, delWarningset } from '@/api/warning'
import { getHostList } from '@/api/admin'
import { IArticleData } from '@/api/types'
import { Form } from 'element-ui'

@Component({
  name: 'callPoliceSet'
})
export default class extends Vue {
  private list: IArticleData[] = []
  private listLoading = true
  private dialogFormVisible = false
  private title = '新增报警配置人员'
  private total = 0
  private sub = ''
  private hostList = []
  private listQuery = {
    page: 1,
    pagesize: 10,
    username: ''
  }
  private initForm = {
    username: '',
    userphone: '',
    monitorstate: '0',
    hostid: '',
    hostcode: '',
    hostname: ''
  }
  private rules = {
    username: [
      { required: true, message: '请输入活动名称', trigger: 'blur' }
    ],
    userphone: [
      { required: true, message: '请输入正确的手机号', trigger: 'blur' },
      { min: 11, max: 11, message: '请输入11位手机号', trigger: 'blur' }
    ]
  }
  private formData = { ...this.initForm }
  private formLabelWidth = '120px'

  created() {
    this.getList()
    this.getHostList()
  }
  // 列表数据获取
  private async getList() {
    this.listLoading = true
    const { data } = await getWarningsetList(this.listQuery)
    this.list = data.items
    this.total = data.total
    this.listLoading = false
  }
  // 获取主机列表
  private async getHostList() {
    const { data } = await getHostList(this.listQuery)
    this.hostList = data.items
  }
  //选择主机时，赋值隐藏域
  private hostChange(data: any) {
    //console.log(item);
    this.formData.hostcode = data.hostcode;
    this.formData.hostname = data.hostname;
  }
  // 新增 修改
  private async changeHandel(row:any) {
    this.dialogFormVisible = true
    if (row) {
      this.title = '修改报警配置人员'
      this.sub = 'put'
      this.formData = row
    } else {
      this.title = '新增报警配置人员'
      this.sub = 'add'
      this.formData = this.initForm
    }
  }

  private async submitHandle() {
    (this.$refs.formData as Form).validate(async(valid) => {
      if (valid) {
        if (this.sub === 'add') {
          const { data } = await addWarningset(this.formData)
          if (data) {
            this.$message({
              type: 'success',
              message: '添加成功!'
            })
            this.getList()
          }
        } else {
          const { data } = await putWarningset(this.formData)
          if (data) {
            this.$message({
              type: 'success',
              message: '修改成功!'
            })
            this.getList()
          }
        }
        this.dialogFormVisible = false
      }
    })
  }
  // 删除
  private async delHandel(id:any) {
    this.$confirm('确定要删除该配置人员？', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      const res = delWarningset({ id })
      if (res) {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
        this.getList()
      }
    }).catch(() => {
      this.$message({
        type: 'info',
        message: '已取消删除'
      })
    })
  }
  // 分页切换
  private async handleCurrentChange(page:any) {
    this.listQuery.page = page
    this.getList()
  }
}
</script>
<style lang="scss" scoped>
  .el-input{
    width: 200px !important;
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
        .butItem{
          display: inline-block;
          padding: 4px 15px;
          margin: 0 5px;
          border: solid 1px #fff;
          border-radius: 3px;
          width: 90px;
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
