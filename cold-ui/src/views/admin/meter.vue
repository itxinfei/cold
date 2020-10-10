<template>
  <div class="app-container">
    <div class="topLable">
      <div class="tit"><span><i class="icon">&#xe610;</i> 仪表管理</span> </div>
      <div class="info">
        <div class="butItem" @click="changeHandel()">+新增</div>
        <el-input class="seach" v-model="listQuery.housename" @input="getList" size="mini" placeholder="请输入仓库名称"></el-input>
      </div>
    </div>
    <div class="content">
      <el-table v-loading="listLoading" :data="list" element-loading-text="Loading" style="width: 100%">
        <el-table-column align="center" label="ID" width="50" >
          <template slot-scope="scope"> {{ scope.$index+1 }} </template>
        </el-table-column>
        <el-table-column label="仪表编号" prop="metercode" />
        <el-table-column label="仪表名称" prop="metername" />
        <el-table-column label="主机名称" prop="hostname" />
        <el-table-column label="库房名称" prop="housename" />
        <el-table-column label="企业名称" prop="companyname" />
        <el-table-column label="温度阈值" align="center" width="100" >
            <template slot-scope="scope"> {{ scope.row.mintem }} / {{ scope.row.maxtem }}</template>
        </el-table-column>
        <el-table-column label="湿度阈值" align="center" width="100">
          <template slot-scope="scope"> {{ scope.row.minhum }} / {{ scope.row.maxhum }}</template>
        </el-table-column>
        <el-table-column label="采集间隔" align="center" width="80">
          <template slot-scope="scope"> {{ scope.row.meterinterval }} s</template>
        </el-table-column>
        <el-table-column label="状态" width="50">
          <template slot-scope="scope"> {{ scope.row.meterstatus == 0 ? '停用': scope.row.meterstatus == 1 ? '启用' : '异常'}} </template>
        </el-table-column>
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
      <el-form :model="form" :rules="rules" ref="form" :inline="true"  size="mini">
        <el-form-item style="display: none;">
          <el-input type="hidden" v-model="form.companyname" autocomplete="off"></el-input>
          <el-input type="hidden" v-model="form.housecode" autocomplete="off"></el-input>
          <el-input type="hidden" v-model="form.housename" autocomplete="off"></el-input>
          <el-input type="hidden" v-model="form.hostcode" autocomplete="off"></el-input>
          <el-input type="hidden" v-model="form.hostname" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="仪表名称:" prop="metername" :label-width="formLabelWidth">
          <el-input v-model="form.metername" autocomplete="off" placeholder="请输入仪表名称"></el-input>
        </el-form-item>
        <el-form-item label="仪表编号:" prop="metercode" :label-width="formLabelWidth">
          <el-input v-model="form.metercode" autocomplete="off" placeholder="请输入仪表编号"></el-input>
        </el-form-item>
        <el-form-item label="企业名称:" prop="companyid" size="mini" :label-width="formLabelWidth">
          <el-select v-model="form.companyid" placeholder="请选择企业">
            <el-option v-for="item in companyList" :key="item.id" :label="item.company" :value="item.id" @click.native="companyChange(item)"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="仓库名称:" prop="houseid" :label-width="formLabelWidth">
          <el-select v-model="form.houseid" placeholder="请选择库房">
            <el-option v-for="item in storehouseList" :key="item.id" :label="item.housename" :value="item.id" @click.native="houseChange(item)"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="管理主机:" prop="hostid" :label-width="formLabelWidth">
          <el-select v-model="form.hostid" placeholder="请选择管理主机">
            <el-option v-for="item in hostList" :key="item.id" :label="item.hostname" :value="item.id" @click.native="hostChange(item)"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="仪表状态:" prop="meterstatus" :label-width="formLabelWidth">
          <el-select v-model="form.meterstatus" placeholder="请选择仪表状态">
            <el-option label="在用" value="1"></el-option>
            <el-option label="停用" value="0"></el-option>
            <el-option label="异常" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="温度上限" prop="maxtem" :label-width="formLabelWidth">
          <el-input v-model="form.maxtem" autocomplete="off" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="温度下限" prop="mintem" :label-width="formLabelWidth">
          <el-input v-model="form.mintem" autocomplete="off" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="湿度上限" prop="maxhum" :label-width="formLabelWidth">
          <el-input v-model="form.maxhum" autocomplete="off" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="湿度下限" prop="minhum" :label-width="formLabelWidth">
          <el-input v-model="form.minhum" autocomplete="off" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="采集间隔" prop="meterinterval" :label-width="formLabelWidth">
          <el-input v-model="form.meterinterval" autocomplete="off" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="备注信息" :label-width="formLabelWidth">
          <el-input v-model="form.remarks" autocomplete="off" placeholder="请输入"></el-input>
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
import { getMeterList, addMeter, putMeter, delMeter, getCompanyList, getHostList, getStorehouseList } from '@/api/admin'
import { IArticleData } from '@/api/types'
import { Form } from 'element-ui'

@Component({
  name: 'Meter',
  filters: {
    parseTime: (timestamp: string) => {
      return new Date(timestamp).toISOString()
    }
  }
})
export default class extends Vue {
  private list: IArticleData[] = []
  private listLoading = true
  private dialogFormVisible = false
  private title = '新增仪表'
  private total = 0
  private sub = ''
  private companyList = []
  private storehouseList =[]
  private hostList = []
  private listQuery = {
    page: 1,
    pagesize: 10,
    housename: ''
  }
  private getListQuery = {
    page: 1,
    pagesize: 100
  }
  private initForm = {
    metercode: '',
    metername: '',
    hostid: '',
    hostcode: '',
    hostname: '',
    houseid: '',
    housecode: '',
    housename: '',
    companyid: '',
    companyname: '',
    meterinterval: '',
    meterstatus: '',
    mintem: '',
    maxtem: '',
    minhum: '',
    maxhum: '',
    remarks: ''
  }
  private form = { ...this.initForm }
  private formLabelWidth = '120px'
  private rules = {
    metercode: [
      { required: true, message: '请输入仪表编号', trigger: 'blur' }
    ],
    metername: [
      { required: true, message: '请输入仪表名', trigger: 'blur' }
    ],
    hostid: [
      { required: true, message: '请选择主机', trigger: 'change' }
    ],
    houseid: [
      { required: true, message: '请选择库房', trigger: 'change' }
    ],
    companyid: [
      { required: true, message: '请选择使用企业', trigger: 'change' }
    ],
    meterstatus: [
      { required: true, message: '请选择仪表状态', trigger: 'change' }
    ],
    mintem: [
      { required: true, message: '请输入温度下限', trigger: 'blur' }
    ],
    maxtem: [
      { required: true, message: '请输入温度上限', trigger: 'blur' }
    ],
    minhum: [
      { required: true, message: '请输入湿度下限', trigger: 'blur' }
    ],
    maxhum: [
      { required: true, message: '请输入湿度上限', trigger: 'blur' }
    ],
    meterinterval: [
      { required: true, message: '请输入采集间隔', trigger: 'blur' }
    ]
  }
  created() {
    this.getList()
    this.getCompanyList()
    this.getStorehouseList()
    this.getHostList()
  }

  //选择公司时，赋值隐藏域
  private companyChange(data: any) {
    //console.log(item);
    this.form.companyname = data.company;
  }
  //选择仓库时，赋值隐藏域
  private houseChange(data: any) {
    //console.log(item);
    this.form.housecode = data.housecode;
    this.form.housename = data.housename;
  }
  //选择主机时，赋值隐藏域
  private hostChange(data: any) {
    //console.log(item);
    this.form.hostcode = data.hostcode;
    this.form.hostname = data.hostname;
  }


  // 获取企业列表
  private async getCompanyList() {
    const { data } = await getCompanyList(this.getListQuery)
    this.companyList = data.items
  }
  // 获取库房列表
  private async getStorehouseList() {
    const { data } = await getStorehouseList(this.getListQuery)
    // console.log(data.items)
    this.storehouseList = data.items
  }
  // 获取主机列表
  private async getHostList() {
    const { data } = await getHostList(this.getListQuery)
    this.hostList = data.items
  }
  // 列表数据获取
  private async getList() {
    this.listLoading = true
    const { data } = await getMeterList(this.listQuery)
    this.list = data.items
    this.total = data.total
    this.listLoading = false
  }
  // 新增 修改
  private async changeHandel(row:any) {
    this.dialogFormVisible = true
    if (row) {
      // console.log(row)
      this.title = '修改仪表'
      this.sub = 'put'
      this.form = row
      // console.log(99,row)
    } else {
      this.title = '新增仪表'
      this.sub = 'add'
      this.form = this.initForm
    }
  }
  private async submitHandle() {
    (this.$refs.form as Form).validate(async(valid) => {
      if (valid) {
        if (this.sub === 'add') {
          const res = await addMeter(this.form)
          // console.log(res)
          if (res.status === 200) {
            this.$message({
              type: 'success',
              message: '添加成功!'
            })
            this.getList()
          }
        } else {
          const res = await putMeter(this.form)
          // console.log(res)
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
  // 删除
  private async delHandel(id:any) {
    this.$confirm('确定要删除该仪表？', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      const res = delMeter({ id })
      // console.log(res)
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
