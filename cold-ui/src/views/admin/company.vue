<template>
  <div class="app-container">
    <div class="topLable">
      <div class="tit"><span><i class="icon">&#xe610;</i> 企业管理</span> </div>
      <div class="info">
        <div class="butItem" @click="changeHandel()">+新增</div>
        <el-input class="seach" v-model="listQuery.company" @input="getList" size="mini" placeholder="请输入企业名称"></el-input>
      </div>
    </div>
    <div class="content">
      <el-table v-loading="listLoading" :data="list" element-loading-text="Loading" style="width: 100%">
        <el-table-column align="center" label="序号" width="50" >
          <template slot-scope="scope"> {{ scope.$index+1 }} </template>
        </el-table-column>
        <el-table-column label="企业全称" align="center" prop="company" />
        <el-table-column label="企业简称" align="center" prop="abbreviation" />
        <el-table-column label="质量管理员" align="center" prop="managementName" >
          <template slot-scope="scope">
            {{scope.row.managementname ? scope.row.managementname : '--'}}
          </template>
        </el-table-column>
        <el-table-column label="联系电话" align="center"  prop="temInterval" >
          <template slot-scope="scope">
            {{scope.row.managementphone ? scope.row.managementphone : '--'}}
          </template>
        </el-table-column>
        <el-table-column label="操作" prop="" align="center" width="180px">
          <template slot-scope="scope">
            <span class="action" > <router-link :to="{path: '/admin/storehouse'}"> 库房 </router-link> </span>
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
    <el-dialog class="meterAdd" :title="title" :visible.sync="dialogFormVisible" >
      <el-form :model="form" :inline="false" :rules="rules" ref="form"  size="mini">
        <div class="itemList">
          <el-form-item label="企业名称" size="mini" prop="company" :label-width="formLabelWidth" >
            <el-input v-model="form.company" autocomplete="off" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="企业简称" size="mini" prop="abbreviation":label-width="formLabelWidth" >
            <el-input v-model="form.abbreviation" autocomplete="off" placeholder="请输入"></el-input>
          </el-form-item>
        </div>
        <div class="itemList add">
          <el-form-item label="地址" size="mini" prop="companyaddress"  :label-width="formLabelWidth">
            <el-input type="textarea" v-model="form.companyaddress" autocomplete="off" placeholder="请输入"></el-input>
          </el-form-item>
        </div>
        <div class="itemList">
          <el-form-item label="企业类型" size="mini" prop="companytype" :label-width="formLabelWidth">
            <el-input v-model="form.companytype" autocomplete="off" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="公司电话" size="mini" prop="companyphone" :label-width="formLabelWidth">
            <el-input v-model="form.companyphone" autocomplete="off" placeholder="请输入"></el-input>
          </el-form-item>
        </div>
        <div class="itemList">
          <el-form-item label="质管人员" size="mini" :label-width="formLabelWidth">
            <el-input v-model="form.managementname" autocomplete="off" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="质管人电话" size="mini" :label-width="formLabelWidth">
            <el-input v-model="form.managementphone" autocomplete="off" placeholder="请输入"></el-input>
          </el-form-item>
        </div>
        <div class="itemList">
          <el-form-item label="公司负责人" size="mini" :label-width="formLabelWidth">
            <el-input v-model="form.leader" autocomplete="off" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="负责人电话" size="mini" :label-width="formLabelWidth">
            <el-input v-model="form.leaderphone" autocomplete="off" placeholder="请输入"></el-input>
          </el-form-item>
        </div>
        <div class="itemList">
          <el-form-item label="备注信息" size="mini" :label-width="formLabelWidth">
            <el-input v-model="form.message" autocomplete="off" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="网址" size="mini" :label-width="formLabelWidth">
            <el-input v-model="form.webaddress" autocomplete="off" placeholder="请输入"></el-input>
          </el-form-item>
        </div>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button size="mini" @click="dialogFormVisible = false">取 消</el-button>
        <el-button size="mini" type="primary" @click="submitHandle" >保存</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { getCompanyList, addCompany, putCompany, delCompany } from '@/api/admin'
import { IArticleData } from '@/api/types'
import { Form } from 'element-ui'

@Component({
  name: 'Company'
})
export default class extends Vue {
  private list: IArticleData[] = []
  private listLoading = true
  private dialogFormVisible = false
  private title = '新增企业'
  private company = ''
  private total = 0
  private sub = ''
  private listQuery = {
    company: '',
    page: 1,
    pagesize: 10
  }
  private initForm = {
    company: '',
    abbreviation: '',
    companyaddress: '',
    companyphone: '',
    managementname: '',
    managementphone: '',
    companytype: '',
    leader: '',
    leaderphone: '',
    message: '',
    webaddress: ''
  }
  private form = { ...this.initForm }
  private rules = {
    company: [
      { required: true, message: '请输入企业名称', trigger: 'blur' }
    ],
    abbreviation: [
      { required: true, message: '请输入企业简称', trigger: 'blur' }
    ]
  }
  private formLabelWidth = '120px'

  created() {
    this.getList()
  }
  private async getList() {
    this.listLoading = true
    const { data } = await getCompanyList(this.listQuery)
    this.list = data.items
    this.total = data.total
    this.listLoading = false
  }
  // 新增 修改
  private async changeHandel(row:any) {
    this.dialogFormVisible = true
    if (row) {
      this.title = '修改企业'
      this.sub = 'put'
      this.form = row
    } else {
      this.title = '新增企业'
      this.sub = 'add'
      this.form = this.initForm
    }
  }
  // 新增修改 保存
  private async submitHandle() {
    (this.$refs.form as Form).validate(async(valid) => {
      if (valid) {
        if (this.sub == 'add') {
          const res = await addCompany(this.form)
          if (res.status === 200) {
            this.$message({
              type: 'success',
              message: '添加成功!'
            })
            this.getList()
          }
        } else if (this.sub === 'put'){
          const res = await putCompany(this.form)
          if (res && res.status === 200) {
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
    const res  = await delCompany({ id })
    console.log(res)
    // return
    if(res.hasOwnProperty("status")){
      if(res.status == 200) {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
        this.getList()
      }
    }


    // this.$confirm('确定要删除该企业？', '提示', {
    //   confirmButtonText: '确定',
    //   cancelButtonText: '取消',
    //   type: 'warning'
    // }).then(() => {
    //   const res  =  delCompany({ id })
    //
    //   console.log(res)
    //   // return
    //   if(res.hasOwnProperty("status")){
    //     if(res.status == 200) {
    //       this.$message({
    //         type: 'success',
    //         message: '删除成功!'
    //       })
    //       this.getList()
    //     }
    //   }
    // }).catch(err => {
    //   console.log(err)
    //   this.$message({
    //     type: 'info',
    //     message: '已取消删除'
    //   })
    // })
  }
  // 分页切换
  private async handleCurrentChange(page:any) {
    this.listQuery. page = page
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
    .itemList{
      display: flex;
    }
    .add{
      display: block;
      width: 555px;
    }
  }
</style>
