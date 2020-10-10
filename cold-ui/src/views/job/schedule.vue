<template>
  <div class="app-container">
    <div class="topLable">
      <div class="tit"><span><i class="icon">&#xe610;</i> 任务管理</span> </div>
      <div class="info">
        <div class="butItem" @click="addOrUpdateHandle()">新增</div>
        <div class="butItem" @click="logHandle()">日志</div>
        <el-input class="seach" v-model="listQuery.beanName" @input="getDataList" size="mini" placeholder="请输入bean名称"></el-input>
      </div>
    </div>
    <div class="content">
      <el-table
        :data="dataList"
        v-loading="dataListLoading"
        @selection-change="selectionChangeHandle"
        style="width: 100%;">
        <el-table-column
          prop="jobId"
          header-align="center"
          align="center"
          width="80"
          label="ID">
        </el-table-column>
        <el-table-column
          prop="beanName"
          header-align="center"
          align="center"
          label="bean名称">
        </el-table-column>
        <el-table-column
          prop="methodName"
          header-align="center"
          align="center"
          label="方法名称">
        </el-table-column>
        <el-table-column
          prop="params"
          header-align="center"
          align="center"
          label="参数">
        </el-table-column>
        <el-table-column
          prop="cronExpression"
          header-align="center"
          align="center"
          label="cron表达式">
        </el-table-column>
        <el-table-column
          prop="remark"
          header-align="center"
          align="center"
          label="备注">
        </el-table-column>
        <el-table-column
          prop="status"
          header-align="center"
          align="center"
          label="状态">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.status === 0" size="small">正常</el-tag>
            <el-tag v-else size="small" type="danger">暂停</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          fixed="right"
          header-align="center"
          align="center"
          width="150"
          label="操作">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="addOrUpdateHandle(scope.row.jobId)">修改</el-button>
            <el-button type="text" size="small" @click="deleteHandle(scope.row.jobId)">删除</el-button>
            <el-button type="text" size="small" @click="pauseHandle(scope.row.jobId)">暂停</el-button>
            <el-button type="text" size="small" @click="resumeHandle(scope.row.jobId)">恢复</el-button>
            <el-button type="text" size="small" @click="runHandle(scope.row.jobId)">立即执行</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        class="pageList"
        background
        layout="prev, pager, next"
        @current-change="currentChangeHandle"
        :total="Number(totalPage)">
      </el-pagination>
    </div>

    <!-- 弹窗, 新增 / 修改 -->
    <add-or-update v-if="addOrUpdateVisible" ref="addOrUpdate" @refreshDataList="getDataList"></add-or-update>
    <!-- 弹窗, 日志列表 -->
    <log v-if="logVisible" ref="log"></log>
  </div>
</template>

<script>
  import AddOrUpdate from './schedule-add-or-update'
  import Log from './schedule-log'
  import { getJobList, getJob, saveJob, updateJob, deleteJob, runJob, pauseJob, resumeJob, jobLogList, jobLog } from '@/api/admin'

  export default {
    data () {
      return {
        dataForm: {
          beanName: ''
        },
        dataList: [],
        pageIndex: 1,
        pageSize: 10,
        totalPage: 0,
        dataListLoading: false,
        dataListSelections: [],
        addOrUpdateVisible: false,
        logVisible: false,
        listQuery: {
          beanName: '',
          page: 1,
          pagesize: 10
        }
      }
    },
    components: {
      AddOrUpdate,
      Log
    },
    created () {
      this.getDataList()
    },
    methods: {
      // 获取数据列表
      getDataList () {
        this.dataListLoading = true

        getJobList({
          'page': this.pageIndex,
          'limit': this.pageSize,
          'beanName': this.dataForm.beanName
        }).then((res) => {
          var data = res.data
          if(data){
            if (data.code === 0) {
              // console.log(data.page.list)
              // console.log(data.page.totalCount)
              this.dataList = data.page.list
              this.totalPage = data.page.totalCount
            } else {
              this.dataList = []
              this.totalPage = 0
            }
            this.dataListLoading = false
          }
        }).catch(() => {})

      },
      // 每页数
      sizeChangeHandle (val) {
        this.pageSize = val
        this.pageIndex = 1
        this.getDataList()
      },
      // 当前页
      currentChangeHandle (val) {
        this.pageIndex = val
        this.getDataList()
      },
      // 多选
      selectionChangeHandle (val) {
        this.dataListSelections = val
      },
      // 新增 / 修改
      addOrUpdateHandle (id) {
        this.addOrUpdateVisible = true
        this.$nextTick(() => {
          this.$refs.addOrUpdate.init(id)
        })
      },
      // 删除
      deleteHandle (id) {
        var ids = id ? [id] : this.dataListSelections.map(item => {
          return item.jobId
        })
        this.$confirm(`确定对[id=${ids.join(',')}]进行[${id ? '删除' : '批量删除'}]操作?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          deleteJob(ids).then((res) => {
            if(res){
              if(res.data.code === 0){
                this.$message({
                  message: '操作成功',
                  type: 'success',
                  duration: 1500,
                  onClose: () => {
                    this.getDataList()
                  }
                })
              }else {
                this.$message.error(res.msg)
              }
            }
          })
        }).catch(() => {})
      },
      // 暂停
      pauseHandle (id) {
        var ids = id ? [id] : this.dataListSelections.map(item => {
          return item.jobId
        })
        this.$confirm(`确定对[id=${ids.join(',')}]进行[${id ? '暂停' : '批量暂停'}]操作?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          pauseJob(ids).then(res => {
            if (res.data.code === 0) {
              this.$message({
                message: '操作成功',
                type: 'success',
                duration: 1500,
                onClose: () => {
                  this.getDataList()
                }
              })
            } else {
              this.$message.error(res.data.msg)
            }
          })
        }).catch(() => {})
      },
      // 恢复
      resumeHandle (id) {
        var ids = id ? [id] : this.dataListSelections.map(item => {
          return item.jobId
        })
        this.$confirm(`确定对[id=${ids.join(',')}]进行[${id ? '恢复' : '批量恢复'}]操作?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          resumeJob(ids).then(res => {
            if (res.data.code === 0) {
              this.$message({
                message: '操作成功',
                type: 'success',
                duration: 1500,
                onClose: () => {
                  this.getDataList()
                }
              })
            } else {
              this.$message.error(res.msg)
            }
          })
        }).catch(() => {})
      },
      // 立即执行
      runHandle (id) {
        var ids = id ? [id] : this.dataListSelections.map(item => {
          return item.jobId
        })
        this.$confirm(`确定对[id=${ids.join(',')}]进行[${id ? '立即执行' : '批量立即执行'}]操作?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          runJob(ids).then( res => {
            if (res.data.code === 0) {
              this.$message({
                message: '操作成功',
                type: 'success',
                duration: 1500,
                onClose: () => {
                  this.getDataList()
                }
              })
            } else {
              this.$message.error(res.data.msg)
            }
          })

        }).catch(() => {})
      },
      // 日志列表
      logHandle () {
        this.logVisible = true
        this.$nextTick(() => {
          this.$refs.log.init()
        })
      }
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
