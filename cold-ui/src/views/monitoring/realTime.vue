<template>
  <div class="app-container">
    <div class="topLable">
      <div class="tit"><i class="icon">&#xe610;</i> <span >仓库实时监控</span> </div>
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
      <BaiduMap v-if="mapData" :data="mapData"></BaiduMap>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { getStorehouseMonitor, setOperation } from '@/api/monitor'
import { getCompanyList } from '@/api/admin'
import { getTotal, getOperation, getMapData } from '@/api/main'
import { IListData } from '@/api/types'
import BaiduMap from '@/components/Map/realTimeMap.vue'

@Component({
  name: 'realTime',
  components: {
    BaiduMap
  }
})
export default class extends Vue {
  private companyId = ''
  private act:string = '0'
  private mapData = []
  private options = []
  private listQuery = {
    companyId: 0,
    state: 0
  }
  created() {
    this.getList()
    this.getCompany()
  }
  private async getList() {
    const { data } = await getMapData(this.listQuery)
    //console.log(data)
    this.mapData = data.items
  }
  private async getCompany() {
    const queryData = {
      page: 1,
      pagesize: 100
    }
    const { data } = await getCompanyList(queryData)
    this.options = data.items
  }
  private async seachCondition(st:string, dat:number) {
    if (st === 'com') {
      this.listQuery.companyId = Number(this.companyId)
    }
    if (st === 'st') {
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
      margin-bottom: 10px;
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
      padding: 10px;
      border-radius: 5px;
      min-height: 700px;
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
