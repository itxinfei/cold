<template>
  <div class="dashboard-container">
    <div class="topInfo">
      <div class="userInfo">
        <img class="icon" src="./../../assets/icon.png" alt="">
        <div>
          <div>欢迎，{{ name }}，祝您开心每一天</div>
          <div class="time">上次登录时间: {{ logintime }}</div>
        </div>
      </div>
      <div class="total">
        <div class="label">
          <div class="num">{{totalData.equipmentTotal}}</div>
          <div>设备数</div>
        </div>
        <div class="label">
          <div class="num">{{totalData.organizationTotal}}</div>
          <div>机构数</div>
        </div>
        <div class="label">
          <div class="num">{{totalData.warningTotal}}</div>
          <div>警告数</div>
        </div>
      </div>
    </div>
    <div class="dashboard-cont">
      <div class="title">
        <div>实时监控图</div>
        <div class="info">
          <div class="lab">
            <div class="num">{{totalData.meterTotal}}</div>
            <div>总仪表数</div>
          </div>
          <div class="lab">
            <div class="num">{{totalData.accuracy}} %</div>
            <div>正常率</div>
          </div>
          <div class="lab">
            <div class="num">{{totalData.unaccomplished}}</div>
            <div>待处理</div>
          </div>
          <div class="lab">
            <div class="num">{{totalData.finishNumber}}</div>
            <div>已处理</div>
          </div>
        </div>
      </div>
      <div class="content" style="height: 300px">
        <BaiduMap v-if="mapData" :data="mapData"></BaiduMap>
      </div>
    </div>
    <div class="dashboard-cont"  style="height:500px;">
      <div class="title">昌平二号仓温度预警趋势/小时</div>
      <div class="cont">
        <iframe
          width="1000"
          height="400"
          seamless
          frameBorder="0"
          scrolling="no"
          src="http://172.17.0.143:7088/superset/explore/?form_data=%7B%22datasource%22%3A%221__druid%22%2C%22viz_type%22%3A%22big_number%22%2C%22slice_id%22%3A9%2C%22url_params%22%3A%7B%7D%2C%22granularity%22%3A%22PT1H%22%2C%22druid_time_origin%22%3A%22now%22%2C%22time_range%22%3A%22No+filter%22%2C%22metric%22%3A%22count%22%2C%22adhoc_filters%22%3A%5B%7B%22expressionType%22%3A%22SIMPLE%22%2C%22subject%22%3A%22temalert%22%2C%22operator%22%3A%22%21%3D%22%2C%22comparator%22%3A%220%22%2C%22clause%22%3A%22WHERE%22%2C%22sqlExpression%22%3Anull%2C%22fromFormData%22%3Atrue%2C%22filterOptionName%22%3A%22filter_us99vlish7_82rhkkinfe%22%7D%2C%7B%22expressionType%22%3A%22SIMPLE%22%2C%22subject%22%3A%22housename%22%2C%22operator%22%3A%22%3D%3D%22%2C%22comparator%22%3A%22%E6%98%8C%E5%B9%B3%E4%BA%8C%E5%8F%B7%E4%BB%93%22%2C%22clause%22%3A%22WHERE%22%2C%22sqlExpression%22%3Anull%2C%22fromFormData%22%3Atrue%2C%22filterOptionName%22%3A%22filter_vn9sfhshmyr_ygrw0prgzj%22%7D%5D%2C%22compare_lag%22%3A%22%22%2C%22y_axis_format%22%3A%22.3s%22%2C%22show_trend_line%22%3Atrue%2C%22start_y_axis_at_zero%22%3Atrue%2C%22color_picker%22%3A%7B%22r%22%3A0%2C%22g%22%3A122%2C%22b%22%3A135%2C%22a%22%3A1%7D%7D&standalone=true&height=400"
        >
        </iframe>
      </div>
    </div>
    <div class="disFlex">
      <div class="cont"  style="height:450px;">
        <div class="title">故障设备/小时</div>
        <div class="content">
          <iframe
            width="1000"
            height="400"
            seamless
            frameBorder="0"
            scrolling="no"
            src="http://172.17.0.143:7088/superset/explore/?form_data=%7B%22datasource%22%3A%221__druid%22%2C%22viz_type%22%3A%22pie%22%2C%22slice_id%22%3A10%2C%22url_params%22%3A%7B%7D%2C%22granularity%22%3A%22PT1H%22%2C%22druid_time_origin%22%3A%22now%22%2C%22time_range%22%3A%22No+filter%22%2C%22metric%22%3A%7B%22expressionType%22%3A%22SIMPLE%22%2C%22column%22%3A%7B%22id%22%3A17%2C%22column_name%22%3A%22meterid%22%2C%22verbose_name%22%3Anull%2C%22description%22%3Anull%2C%22expression%22%3Anull%2C%22filterable%22%3Atrue%2C%22groupby%22%3Atrue%2C%22is_dttm%22%3Anull%2C%22type%22%3A%22STRING%22%2C%22optionName%22%3A%22_col_meterid%22%7D%2C%22aggregate%22%3A%22COUNT%22%2C%22sqlExpression%22%3Anull%2C%22hasCustomLabel%22%3Afalse%2C%22fromFormData%22%3Atrue%2C%22label%22%3A%22COUNT%28meterid%29%22%2C%22optionName%22%3A%22metric_6akyt2liz9_1bovx2oorbp%22%7D%2C%22adhoc_filters%22%3A%5B%7B%22expressionType%22%3A%22SIMPLE%22%2C%22subject%22%3A%22state%22%2C%22operator%22%3A%22%21%3D%22%2C%22comparator%22%3A%221%22%2C%22clause%22%3A%22WHERE%22%2C%22sqlExpression%22%3Anull%2C%22fromFormData%22%3Atrue%2C%22filterOptionName%22%3A%22filter_12dkdd2vrd3i_erq0b9sirhs%22%7D%5D%2C%22groupby%22%3A%5B%22housename%22%5D%2C%22row_limit%22%3Anull%2C%22pie_label_type%22%3A%22key%22%2C%22donut%22%3Afalse%2C%22show_legend%22%3Atrue%2C%22show_labels%22%3Atrue%2C%22labels_outside%22%3Atrue%2C%22color_scheme%22%3A%22bnbColors%22%7D&standalone=true&height=400"
          >
          </iframe>
        </div>
      </div>
    </div>
    <div class="disFlex">
      <div class="cont"  style="height:450px;">
        <div class="title">温度预警Top 5</div>
        <div class="content">
          <iframe
            width="1000"
            height="400"
            seamless
            frameBorder="0"
            scrolling="no"
            src="http://172.17.0.143:7088/superset/explore/?form_data=%7B%22datasource%22%3A%221__druid%22%2C%22viz_type%22%3A%22bar%22%2C%22slice_id%22%3A11%2C%22url_params%22%3A%7B%7D%2C%22granularity%22%3A%22PT1H%22%2C%22druid_time_origin%22%3A%22%22%2C%22time_range%22%3A%22Next+1+days%22%2C%22metrics%22%3A%5B%22count%22%5D%2C%22adhoc_filters%22%3A%5B%7B%22expressionType%22%3A%22SIMPLE%22%2C%22subject%22%3A%22temalert%22%2C%22operator%22%3A%22%21%3D%22%2C%22comparator%22%3A%220%22%2C%22clause%22%3A%22WHERE%22%2C%22sqlExpression%22%3Anull%2C%22fromFormData%22%3Atrue%2C%22filterOptionName%22%3A%22filter_0yma0p5f917s_vsed46ifprf%22%7D%5D%2C%22groupby%22%3A%5B%22metername%22%5D%2C%22limit%22%3A5%2C%22timeseries_limit_metric%22%3A%22count%22%2C%22order_desc%22%3Atrue%2C%22contribution%22%3Afalse%2C%22row_limit%22%3A10%2C%22color_scheme%22%3A%22bnbColors%22%2C%22show_brush%22%3A%22auto%22%2C%22show_legend%22%3Atrue%2C%22show_bar_value%22%3Afalse%2C%22rich_tooltip%22%3Atrue%2C%22bar_stacked%22%3Afalse%2C%22line_interpolation%22%3A%22linear%22%2C%22show_controls%22%3Afalse%2C%22bottom_margin%22%3A%22auto%22%2C%22x_axis_label%22%3A%22%22%2C%22x_ticks_layout%22%3A%22auto%22%2C%22x_axis_format%22%3A%22smart_date%22%2C%22x_axis_showminmax%22%3Afalse%2C%22reduce_x_ticks%22%3Afalse%2C%22y_axis_label%22%3A%22%22%2C%22left_margin%22%3A%22auto%22%2C%22y_axis_showminmax%22%3Afalse%2C%22y_log_scale%22%3Afalse%2C%22y_axis_format%22%3A%22.3s%22%2C%22y_axis_bounds%22%3A%5Bnull%2Cnull%5D%2C%22rolling_type%22%3A%22None%22%2C%22comparison_type%22%3A%22values%22%2C%22resample_how%22%3Anull%2C%22resample_rule%22%3Anull%2C%22resample_fillmethod%22%3Anull%2C%22annotation_layers%22%3A%5B%5D%7D&standalone=true&height=400"
          >
          </iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { UserModule } from '@/store/modules/user'
import { getTotal, getOperation, getMapData } from '@/api/main'
import LineChart from '@/components/Charts/LineChart.vue'
import PieChart from '@/components/Charts/PieChart.vue'
import BaiduMap from '@/components/Map/index.vue'

@Component({
  name: 'Dashboard',
  components: {
    LineChart,
    BaiduMap,
    PieChart
  }
})
export default class extends Vue {
  private totalData = {}
  private operationData = []
  private mapData = []
  private listQuery = {
    companyId: 0,
    state: 0
  }
  private dataItem = {
    name: '设备数',
    xAxis: ['13:00', '13:05', '13:10', '13:15', '13:20', '13:25', '13:30', '13:35', '13:40', '13:45', '13:50', '13:55'],
    data: [120, 110, 125, 145, 122, 165, 122, 220, 182, 191, 134, 150]
  }
  get name() {
    return UserModule.username
  }
  get logintime() {
    return UserModule.logintime
  }
  private async getMapData() {
    const { data } = await getMapData(this.listQuery)
    console.log(data)
    this.mapData = data
  }
  private async getTotalData() {
    const { data } = await getTotal({})
    this.totalData = data
  }
  private async getOperation() {
    const { data } = await getOperation({
      page: 1,
      pagesize: 4
    })
    this.operationData = data.items
  }
  created() {
    this.getMapData()
    this.getTotalData()
    this.getOperation()
  }
}
</script>

<style lang="scss" scoped>
.dashboard-container {
  .topInfo{
    margin: 0 15px;
    padding: 15px;
    background: #fff;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    .userInfo{
      display: flex;
      justify-content: space-between;
      line-height: 25px;
      color:#333333;
      .icon{
        width: 50px;
        height: 50px;
        margin-right: 10px;
        border-radius: 100%;
      }
      .time{
        font-size: 12px;
        color:#999;
      }
    }
    .total{
      display: flex;
      font-size: 12px;
      position: relative;
      right: -21px;
      color:#999;
      .label{
        text-align: center;
        padding: 0px 40px;
        margin: 5px 0;
        border-right: solid 1px #e7e7e7;
        line-height: 1.5;
        .num{
          font-size: 18px;
          color:#5d8bf3;
        }
      }
      .label:last-child{
        border:none;
      }
    }
  }
  .dashboard-cont, .cont{
    background: #fff;
    border-radius: 5px;
    margin: 15px;
    padding: 15px;
    .title{
      margin-bottom: 15px;
      position: relative;
      display: flex;
      justify-content: space-between;
      position: relative;
      color:#186bd0;
      font-size: 14px;
      &::before{
        content: '';
        display: inline-block;
        position: absolute;
        top:18px;
        left: 0;
        width: 28px;
        height: 2px;
        background: #fd8888;
      }
      .info{
        position: relative;
        /*right: 28px;*/
        color:#999;
        display: flex;
        text-align: center;
        font-size: 12px;
        line-height: 1.5;
        .lab{
          padding: 0 20px;
        }
        .num{
          font-size: 16px;
          color:#333;
        }
      }
    }
    .content{
      width: 100%;
      height: 240px;
      .list{
        display: flex;
        border-bottom: solid 1px #f2f3f5;
        font-size: 14px;
        padding: 10px 0;
        color:#333;
        line-height: 1.5;
        img{
          width: 38px;
          height: 38px;
          border-radius: 100%;
          margin-right: 10px;
        }
        .time{
          font-size: 12px;
          color: #999;
        }
        &:last-child{
          border: none;
        }
      }
    }
    .baudumap{
      width: 100%;
      height: 300px;
    }
  }
  .disFlex{
    margin: 15px;
    display: flex;
    justify-content: space-between;
    .cont{
      background: #fff;
      border-radius: 5px;
      flex: 1;
      margin: 0;
      padding: 15px;
      height: inherit;
      min-height: 200px;
    }
    .cont:last-child{
      margin-left: 15px;
    }
  }
}
</style>
