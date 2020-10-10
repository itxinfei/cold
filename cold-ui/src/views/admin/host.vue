<template>
  <div class="app-container">
    <div class="topLable">
      <div class="tit"><span><i class="icon">&#xe610;</i> 主机管理</span> </div>
      <div class="info">
        <div class="butItem" @click="changeHandel()">+新增</div>
        <el-input class="seach" v-model="listQuery.housename" @input="getList" size="mini" placeholder="请输入仓库名称"></el-input>
      </div>
    </div>
    <div class="content">
      <el-table v-loading="listLoading" :data="list" element-loading-text="Loading" style="width: 100%">
        <el-table-column align="center" label="序号" width="50" >
          <template slot-scope="scope"> {{ scope.$index+1 }} </template>
        </el-table-column>
        <el-table-column label="主机编号" prop="hostcode" />
        <el-table-column label="主机名称" prop="hostname" />
        <el-table-column label="所属仓库" prop="housename" />
        <el-table-column label="状态" prop="hoststatus" >
          <template slot-scope="scope"> {{ scope.row.hoststatus == 1 ? '正常': scope.row.hoststatus == 0 ? '停用' : '--'}} </template>
        </el-table-column>
        <el-table-column label="设备型号" prop="hostmodel" />
        <el-table-column label="sim卡号" prop="simcode" />
        <el-table-column label="操作" prop="" align="center" width="210">
          <template slot-scope="scope">
            <span class="action"><router-link :to="{path: '/admin/meter'}">仪表管理</router-link></span>
            <span class="action" @click="changeHandel(scope.row)"> 修改 </span>
            <span class="action" @click="stopHandel(scope.row)"> 停用 </span>
            <span class="action" @click="delHandel(scope.row.id)"> 删除 </span>
            <span class="action" @click="restartHandel(scope.row.id)"> 重启 </span>
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
      <el-form :model="form" :rules="rules" ref="form" :inline="true"  size="mini">
        <el-form-item style="display: none;">
          <el-input type="hidden" v-model="form.housecode" autocomplete="off"></el-input>
          <el-input type="hidden" v-model="form.housename" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="主机编号" prop="hostcode" :label-width="formLabelWidth">
          <el-input v-model="form.hostcode" autocomplete="off" placeholder="请输入主机编号"></el-input>
        </el-form-item>
        <el-form-item label="主机名称" prop="hostname" :label-width="formLabelWidth">
          <el-input v-model="form.hostname" autocomplete="off" placeholder="请输入主机名称"></el-input>
        </el-form-item>

        <el-form-item label="所属仓库" prop="houseid" size="mini" :label-width="formLabelWidth">
          <el-select v-model="form.houseid" placeholder="请选择库房">
            <el-option v-for="item in storehouseList" :key="item.id" :label="item.housename" :value="item.id" @click.native="houseChange(item)"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="主机状态" prop="hoststatus" :label-width="formLabelWidth">
          <el-select v-model="form.hoststatus" placeholder="请选择主机状态">
            <el-option label="在用" value="1"></el-option>
            <el-option label="停用" value="0"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="设备型号" prop="hostmodel" :label-width="formLabelWidth">
          <el-input v-model="form.hostmodel" autocomplete="off" placeholder="请输入设备型号"></el-input>
        </el-form-item>
        <el-form-item label="sim卡号" prop="simcode" :label-width="formLabelWidth">
          <el-input v-model="form.simcode" autocomplete="off" placeholder="请输入sim卡号"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button size="mini" @click="dialogFormVisible = false">取 消</el-button>
        <el-button size="mini" type="primary" @click="submitHandle">保存</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { getHostList, addHost, putHost, delHost, stopHost, restartHost, getStorehouseList } from '@/api/admin'
import { IArticleData } from '@/api/types'
import { Form } from 'element-ui'

@Component({
  name: 'host'
})
export default class extends Vue {
  private list: IArticleData[] = []
  private listLoading = true
  private dialogFormVisible = false
  private title = '新增主机'
  private total = 0
  private sub = ''
  private storehouseList =[]
  private listQuery = {
    page: 1,
    pagesize: 10,
    housename: ''
  }
  private initForm = {
    hostcode: '',
    hostname: '',
    houseid: '',
    housecode: '',
    housename: '',
    hoststatus: '1',
    hostmodel: '',
    simcode: ''
  }
  private form = { ...this.initForm }
  private formLabelWidth = '120px'
  private rules = {
    hostcode: [
      { required: true, message: '请输入主机编号', trigger: 'blur' }
    ],
    hostname: [
      { required: true, message: '请输入主机名称', trigger: 'blur' }
    ],
    houseid: [
      { required: true, message: '请输入所属仓库id', trigger: 'blur' }
    ]
  }
  created() {
    this.getList()
    this.getStorehouseList()
  }
  // 列表数据获取
  private async getList() {
    this.listLoading = true
    const { data } = await getHostList(this.listQuery)
    this.list = data.items
    this.total = data.total
    this.listLoading = false
  }
  // 获取库房列表
  private async getStorehouseList() {
    const { data } = await getStorehouseList(this.listQuery)
    // console.log(data.items)
    this.storehouseList = data.items
  }
  //选择仓库时，赋值隐藏域
  private houseChange(data: any) {
    //console.log(item);
    this.form.housecode = data.housecode;
    this.form.housename = data.housename;
  }

  // 新增 修改
  private async changeHandel(row:any) {
    this.dialogFormVisible = true
    if (row) {
      this.title = '修改主机'
      this.sub = 'put'
      this.form = row
      console.log(row)
    } else {
      this.title = '新增主机'
      this.sub = 'add'
      this.form = this.initForm
    }
  }
  private async submitHandle() {
    (this.$refs.form as Form).validate(async(valid) => {
      if (valid) {
        if (this.sub === 'add') {
          const res = await addHost(this.form)
          if (res.status === 200) {
            this.$message({
              type: 'success',
              message: '添加成功!'
            })
            this.getList()
          }
        } else {
          const res = await putHost(this.form)
          if (res.status === 200) {
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
  // 停用主机
  private async stopHandel(id:any) {
    this.$confirm('确定要停用该主机？', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      const res = stopHost({ id })
      if (res) {
        this.getList()
        this.$message({
          type: 'success',
          message: '主机已停用!'
        })
      }
    }).catch(() => {
      this.$message({
        type: 'info',
        message: '主机停用失败'
      })
    })
  }
  // 重启主机
  private async restartHandel(id:any) {
    this.$confirm('确定要重启该主机？', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      const res = restartHost({ id })
      if (res) {
        this.getList()
        this.$message({
          type: 'success',
          message: '主机重启中...!'
        })
      }
    }).catch(() => {
      this.$message({
        type: 'info',
        message: '主机重启失败！'
      })
    })
  }
  // 删除
  private async delHandel(id:any) {
    this.$confirm('确定要删除该主机？', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      const res = delHost({ id })
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
<style lang="scss">
  .meterAdd .el-form-item--mini .el-form-item__content{
    width: 150px !important;
  }
</style>
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
        .butItem{
          width: 90px;
          padding: 4px 15px;
          margin: 0 5px;
          border: solid 1px #fff;
          border-radius: 3px;
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
