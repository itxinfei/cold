<template>
  <div class="app-container">
    <div class="topLable">
      <div class="tit"><span><i class="icon">&#xe610;</i> 库房管理</span> </div>
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
        <el-table-column label="库房类型" prop="housetype" >
          <template slot-scope="scope"> {{ scope.row.housetype == 1 ? '冷库': scope.row.housetype == 2 ? '恒温仓' : '--'}} </template>
        </el-table-column>
        <el-table-column label="库房编号" prop="housecode" />
        <el-table-column label="库房名称" prop="housename" />
        <el-table-column label="所属公司" prop="companyname" />
        <el-table-column label="负责人" prop="principalname" />
        <el-table-column label="联系电话" prop="principaltel" />
        <el-table-column label="库房地址" prop="houseaddress" align="center" />
        <el-table-column label="面积" align="center" prop="areasize" width="80" />
        <el-table-column label="状态" prop="housestatus"  width="50" align="center">
          <template slot-scope="scope"> {{ scope.row.housestatus == 0 ? '空仓': scope.row.housestatus == 1 ? '正常' : '--'}} </template>
        </el-table-column>
        <el-table-column label="操作" prop="" align="center" width="150">
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
    <!--新增 修改 库房 -->
    <el-dialog class="meterAdd" :title="title" :visible.sync="dialogFormVisible">
      <el-form :model="form" :rules="rules" ref="form"   size="mini">
        <div style="display: none">
          <el-input type="hidden" v-model="form.companyname" autocomplete="off"></el-input>
        </div>
        <div class="itemList">
          <el-form-item label="仓库编号:" size="mini" prop="housecode" :label-width="formLabelWidth">
            <el-input v-model="form.housecode" autocomplete="off" placeholder="请输入"></el-input>
          </el-form-item>
          <!--<el-form-item label="所属企业:" size="mini" prop="companyid" :label-width="formLabelWidth">-->
          <!--<el-input v-model="form.companyid" autocomplete="off" placeholder="请输入所属企业Id"></el-input>-->
          <!--</el-form-item>-->
          <el-form-item label="企业名称:" prop="companyid" size="mini" :label-width="formLabelWidth">
            <el-select v-model="form.companyid" placeholder="请选择企业">
              <el-option v-for="item in companyList" :key="item.id" :label="item.company" :value="item.id" @click.native="companyChange(item)"></el-option>
            </el-select>
          </el-form-item>
        </div>
        <div class="itemList">
          <el-form-item label="库房名称:" prop="housename" :label-width="formLabelWidth">
            <el-input v-model="form.housename" autocomplete="off" placeholder="请输入库房名称"></el-input>
          </el-form-item>
          <el-form-item label="库房面积:" prop="areasize" :label-width="formLabelWidth">
            <el-input v-model="form.areasize" autocomplete="off" placeholder="请输入库房面积"></el-input>
          </el-form-item>
        </div>
        <div class="itemList">
          <el-form-item label="库房负责人:" prop="principalname" :label-width="formLabelWidth">
            <el-input v-model="form.principalname" autocomplete="off" placeholder="请输入库房负责人"></el-input>
          </el-form-item>
          <el-form-item label="负责人电话:" prop="principaltel" :label-width="formLabelWidth">
            <el-input v-model="form.principaltel" autocomplete="off" placeholder="请输入负责人电话"></el-input>
          </el-form-item>
        </div>
        <div class="itemList">
          <el-form-item label="库房类型:" prop="housetype" :label-width="formLabelWidth">
            <el-select v-model="form.housetype" prop="housetype" placeholder="请选择库房类型">
              <el-option label="冷库" value="1"></el-option>
              <el-option label="恒温库" value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="状态:" prop="housestatus" :label-width="formLabelWidth">
            <el-select v-model="form.housestatus" prop="housestatus" placeholder="请选库房状态">
              <el-option label="空仓" value="0"></el-option>
              <el-option label="正常" value="1"></el-option>
            </el-select>
          </el-form-item>
        </div>
        <div class="itemList add">
          <el-form-item label="详细地址:" prop="houseaddress" :label-width="formLabelWidth">
            <el-input v-model="form.houseaddress" type="textarea" autocomplete="off" placeholder="请输入详细地址"></el-input>
          </el-form-item>
        </div>


      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button size="mini" @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" size="mini" @click="submitHandle">保存</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import { getStorehouseList, addStorehouse, putStorehouse, delStorehouseList, getCompanyList} from '@/api/admin'
  import { IArticleData } from '@/api/types'
  import { Form } from 'element-ui'

  @Component({
    name: 'warehouse'
  })

  export default class extends Vue {
    private list: IArticleData[] = []
    private listLoading = true
    private dialogFormVisible = false
    private title = '新增仓库'
    private total = 0
    private sub = ''
    private companyList = []
    private listQuery = {
      page: 1,
      pagesize: 10,
      company: ''
    }
    private initForm = {
      housecode: '',
      companyid: '',
      companyname: '',
      housetype: '',
      houseaddress: '',
      housename: '',
      housearea: '',
      principalname: '',
      principaltel: '',
      areasize: '',
      housestatus: ''
    }
    private form = {
      ...this.initForm
    }
    private formLabelWidth = '120px'
    private rules = {
      housecode: [
        { required: true, message: '请输入仓库编号', trigger: 'blur' }
      ],
      companyid: [
        { required: true, message: '请选择所属企业', trigger: 'blur' }
      ],
      housename: [
        { required: true, message: '请输入库房名称', trigger: 'blur' }
      ],
      housetype: [
        { required: true, message: '请选择库房类型', trigger: 'change' }
      ],
      housestatus: [
        { required: true, message: '请选择库房类型', trigger: 'change' }
      ]
    }
    created() {
      this.getList()
      this.getCompanyList()
    }
    // 获取企业列表
    private async getCompanyList() {
      const { data } = await getCompanyList(this.listQuery)
      this.companyList = data.items
    }
    //选择公司时，赋值隐藏域
    private companyChange(data: any) {
      //console.log(item);
      this.form.companyname = data.company;
    }

    // 列表数据获取
    private async getList() {
      this.listLoading = true
      const { data } = await getStorehouseList(this.listQuery)
      this.list = data.items
      this.total = data.total
      this.listLoading = false
    }
    // 新增 修改
    private async changeHandel(row:any) {
      this.dialogFormVisible = true
      if (row) {
        this.title = '修改仓库'
        this.sub = 'put'
        this.form = row
      } else {
        this.title = '新增仓库'
        this.sub = 'add'
        this.form = this.initForm
      }
    }
    // 提交
    private async submitHandle() {
      (this.$refs.form as Form).validate(async(valid) => {
        if (valid) {
          if (this.sub === 'add') {
            const res = await addStorehouse(this.form)
            if (res.status === 200) {
              this.$message({
                type: 'success',
                message: '添加成功!'
              })
              this.getList()
            }
          } else {
            const res = await putStorehouse(this.form)
            if (res.status === 200) {
              this.$message({
                type: 'success',
                message: '修改成功!'
              })
            }
            this.getList()
          }
          this.dialogFormVisible = false
        }
      })
    }
    // 删除
    private async delHandel(id:any) {
      this.$confirm('确定要删除该仓库？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        const res = delStorehouseList({ id })
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
  .meterAdd .add .el-form-item--mini .el-form-item__content{
    width: 420px !important;
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
    .itemList{
      display: flex;
    }
    .add{
      display: block;

    }
  }
</style>
