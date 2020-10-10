<template>
  <div class="dashboard-container">
    <!--<div class="listItem">
      <div class="title">
      <div>统计列表 <span class="dat">数据时段：{{ dataTime }}</span></div>
      </div>
      <div>
        <el-table v-loading="listLoading" :data="list" element-loading-text="Loading" style="width: 100%">
          <el-table-column align="center" label="" width="120" >
            <template slot-scope="scope"><span style="color:#186bd0"> {{ scope.row.company }} </span></template>
          </el-table-column>
          <el-table-column label="监控类型" align="center" prop="type" />
          <el-table-column label="仓库数量" align="center" prop="storehouseNumber" />
          <el-table-column label="主机数" align="center" prop="hostNumber" />
          <el-table-column label="仪表数" align="center" prop="meterNumber" />
          <el-table-column label="报警仪表数" align="center" prop="meterWarningNumber" />
          <el-table-column label="监控中" align="center" prop="monitor" />
          <el-table-column label="未监控" align="center" prop="unMonitor" />
          <el-table-column label="当天报警数" align="center" prop="warningDayNumber" />
          <el-table-column label="当天报警率" align="center" prop="warningDayPercentage" />
        </el-table>
        <el-pagination
          class="pageList"
          background
          layout="prev, pager, next"
          @current-change="handleCurrentChange"
          :total="Number(total)">
        </el-pagination>
      </div>
    </div>-->
    <div class="tabCont">
      <div class="title">温度预警数量/每小时/仓库</div>
      <div class="cont">
        <iframe
          width="1000"
          height="400"
          seamless
          frameBorder="0"
          scrolling="no"
          src="http://172.17.0.143:7088/superset/explore/?form_data=%7B%22datasource%22%3A%221__druid%22%2C%22viz_type%22%3A%22bar%22%2C%22slice_id%22%3A6%2C%22url_params%22%3A%7B%7D%2C%22granularity%22%3A%22PT1H%22%2C%22druid_time_origin%22%3A%22%22%2C%22time_range%22%3A%22Next+1+days%22%2C%22metrics%22%3A%5B%7B%22expressionType%22%3A%22SIMPLE%22%2C%22column%22%3A%7B%22id%22%3A22%2C%22column_name%22%3A%22tem%22%2C%22verbose_name%22%3Anull%2C%22description%22%3Anull%2C%22expression%22%3Anull%2C%22filterable%22%3Atrue%2C%22groupby%22%3Atrue%2C%22is_dttm%22%3Anull%2C%22type%22%3A%22STRING%22%7D%2C%22aggregate%22%3A%22COUNT%22%2C%22sqlExpression%22%3Anull%2C%22hasCustomLabel%22%3Afalse%2C%22fromFormData%22%3Atrue%2C%22label%22%3A%22COUNT%28tem%29%22%2C%22optionName%22%3A%22metric_p26mjy3q89a_z2sxzrkv688%22%7D%5D%2C%22adhoc_filters%22%3A%5B%7B%22expressionType%22%3A%22SIMPLE%22%2C%22subject%22%3A%22temalert%22%2C%22operator%22%3A%22%21%3D%22%2C%22comparator%22%3A%220%22%2C%22clause%22%3A%22WHERE%22%2C%22sqlExpression%22%3Anull%2C%22fromFormData%22%3Atrue%2C%22filterOptionName%22%3A%22filter_o0cnvibsibh_osqarkdy8p%22%7D%5D%2C%22groupby%22%3A%5B%22housename%22%5D%2C%22limit%22%3A10%2C%22timeseries_limit_metric%22%3Anull%2C%22order_desc%22%3Atrue%2C%22contribution%22%3Afalse%2C%22row_limit%22%3A100%2C%22color_scheme%22%3A%22bnbColors%22%2C%22show_brush%22%3A%22auto%22%2C%22show_legend%22%3Atrue%2C%22show_bar_value%22%3Afalse%2C%22rich_tooltip%22%3Atrue%2C%22bar_stacked%22%3Afalse%2C%22line_interpolation%22%3A%22linear%22%2C%22show_controls%22%3Afalse%2C%22bottom_margin%22%3A%22auto%22%2C%22x_axis_label%22%3A%22%22%2C%22x_ticks_layout%22%3A%22auto%22%2C%22x_axis_format%22%3A%22smart_date%22%2C%22x_axis_showminmax%22%3Afalse%2C%22reduce_x_ticks%22%3Afalse%2C%22y_axis_label%22%3A%22%22%2C%22left_margin%22%3A%22auto%22%2C%22y_axis_showminmax%22%3Afalse%2C%22y_log_scale%22%3Afalse%2C%22y_axis_format%22%3A%22.3s%22%2C%22y_axis_bounds%22%3A%5Bnull%2Cnull%5D%2C%22rolling_type%22%3A%22None%22%2C%22comparison_type%22%3A%22values%22%2C%22resample_how%22%3Anull%2C%22resample_rule%22%3Anull%2C%22resample_fillmethod%22%3Anull%2C%22annotation_layers%22%3A%5B%5D%7D&standalone=true&height=400"
        >
        </iframe>
      </div>
    </div>

    <div class="tabCont" style="height:500px;">
      <div class="title">湿度预警/每小时/仓库</div>
      <div class="cont">
        <iframe
          width="1000"
          height="400"
          seamless
          frameBorder="0"
          scrolling="no"
          src="http://172.17.0.143:7088/superset/explore/?form_data=%7B%22datasource%22%3A%221__druid%22%2C%22viz_type%22%3A%22bar%22%2C%22slice_id%22%3A8%2C%22url_params%22%3A%7B%7D%2C%22granularity%22%3A%22PT1H%22%2C%22druid_time_origin%22%3A%22%22%2C%22time_range%22%3A%22No+filter%22%2C%22metrics%22%3A%5B%22count%22%5D%2C%22adhoc_filters%22%3A%5B%7B%22expressionType%22%3A%22SIMPLE%22%2C%22subject%22%3A%22humalert%22%2C%22operator%22%3A%22%21%3D%22%2C%22comparator%22%3A%220%22%2C%22clause%22%3A%22WHERE%22%2C%22sqlExpression%22%3Anull%2C%22fromFormData%22%3Atrue%2C%22filterOptionName%22%3A%22filter_0uq4wp3keffb_z9390qlb0w%22%7D%5D%2C%22groupby%22%3A%5B%22housename%22%5D%2C%22timeseries_limit_metric%22%3Anull%2C%22order_desc%22%3Atrue%2C%22contribution%22%3Afalse%2C%22row_limit%22%3A10000%2C%22color_scheme%22%3A%22bnbColors%22%2C%22show_brush%22%3A%22auto%22%2C%22show_legend%22%3Atrue%2C%22show_bar_value%22%3Afalse%2C%22rich_tooltip%22%3Atrue%2C%22bar_stacked%22%3Atrue%2C%22line_interpolation%22%3A%22linear%22%2C%22show_controls%22%3Afalse%2C%22bottom_margin%22%3A%22auto%22%2C%22x_axis_label%22%3A%22%22%2C%22x_ticks_layout%22%3A%22auto%22%2C%22x_axis_format%22%3A%22smart_date%22%2C%22x_axis_showminmax%22%3Afalse%2C%22reduce_x_ticks%22%3Afalse%2C%22y_axis_label%22%3A%22%22%2C%22left_margin%22%3A%22auto%22%2C%22y_axis_showminmax%22%3Afalse%2C%22y_log_scale%22%3Afalse%2C%22y_axis_format%22%3A%22.3s%22%2C%22y_axis_bounds%22%3A%5Bnull%2Cnull%5D%2C%22rolling_type%22%3A%22None%22%2C%22comparison_type%22%3A%22values%22%2C%22resample_how%22%3Anull%2C%22resample_rule%22%3Anull%2C%22resample_fillmethod%22%3Anull%2C%22annotation_layers%22%3A%5B%5D%7D&standalone=true&height=400"
        ></iframe>
      </div>
    </div>
    <div class="tabCont" style="height:400px;">
      <div class="title">昌平二号仓温度预警趋势/小时</div>
      <div class="cont">
        <iframe width="1000" height="300" seamless frameBorder="0" scrolling="no"
                src="http://172.17.0.143:7088/superset/explore/?form_data=%7B%22datasource%22%3A%221__druid%22%2C%22viz_type%22%3A%22big_number%22%2C%22slice_id%22%3A9%2C%22url_params%22%3A%7B%7D%2C%22granularity%22%3A%22PT1H%22%2C%22druid_time_origin%22%3A%22%22%2C%22time_range%22%3A%22No+filter%22%2C%22metric%22%3A%22count%22%2C%22adhoc_filters%22%3A%5B%7B%22expressionType%22%3A%22SIMPLE%22%2C%22subject%22%3A%22temalert%22%2C%22operator%22%3A%22%21%3D%22%2C%22comparator%22%3A%220%22%2C%22clause%22%3A%22WHERE%22%2C%22sqlExpression%22%3Anull%2C%22fromFormData%22%3Atrue%2C%22filterOptionName%22%3A%22filter_us99vlish7_82rhkkinfe%22%7D%2C%7B%22expressionType%22%3A%22SIMPLE%22%2C%22subject%22%3A%22housename%22%2C%22operator%22%3A%22%3D%3D%22%2C%22comparator%22%3A%22%E6%98%8C%E5%B9%B3%E4%BA%8C%E5%8F%B7%E4%BB%93%22%2C%22clause%22%3A%22WHERE%22%2C%22sqlExpression%22%3Anull%2C%22fromFormData%22%3Atrue%2C%22filterOptionName%22%3A%22filter_vn9sfhshmyr_ygrw0prgzj%22%7D%5D%2C%22compare_lag%22%3A%22%22%2C%22y_axis_format%22%3A%22.3s%22%2C%22show_trend_line%22%3Atrue%2C%22start_y_axis_at_zero%22%3Atrue%2C%22color_picker%22%3A%7B%22r%22%3A0%2C%22g%22%3A122%2C%22b%22%3A135%2C%22a%22%3A1%7D%7D&standalone=true&height=300"></iframe>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.dashboard-container {
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
    .dat{
      color:#333;
      font-size: 12px;
      margin-left: 10px;
    }
    .info{
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
  .listItem{
    margin: 0 15px;
    padding: 15px;
    background: #fff;
    border-radius: 5px;
    .userInfo{
      display: flex;
      align-content: space-between;
      line-height: 25px;
      .icon{
        width: 50px;
        height: 50px;
        margin-right: 10px;
        border-radius: 100%;
      }
    }
  }
  .tabCont{
    background: #fff;
    border-radius: 5px;
    margin: 15px;
    padding: 15px;
    .cont{
      height: 400px;
    }
  }
  .pageList{
    text-align: right;
    margin: 10px 0;
  }
}
</style>
