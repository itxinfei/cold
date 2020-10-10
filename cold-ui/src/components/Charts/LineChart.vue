<template>
    <div
      :label="data.name"
      :id="id"
      :class="className"
      :style="{height: height, width: width}"
    />
</template>

<script lang="ts">
import echarts, { EChartOption } from 'echarts'
import { Component, Prop } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import ResizeMixin from './mixins/resize'

@Component({
  name: 'LineChart'
})

export default class extends mixins(ResizeMixin) {
  @Prop({ default: 'chart' }) private className!: string
  @Prop({ default: 'chart' }) private id!: string
  @Prop({ default: '200px' }) private width!: string
  @Prop({ default: '200px' }) private height!: string
  @Prop({ default: {
    name: '测试数据',
    xAxis: ['13:00', '13:05', '13:10', '13:15', '13:20', '13:25', '13:30', '13:35', '13:40', '13:45', '13:50', '13:55'],
    data: [120, 110, 125, 145, 122, 165, 122, 220, 182, 191, 134, 150]
  } }) private data ?: any

  created() {
    this.$nextTick(() => {
      this.initChart()
    })
  }
  updated() {
    this.$nextTick(() => {
      this.initChart()
    })
  }
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  }

  private initChart() {
    this.chart = echarts.init(document.getElementById(this.id) as HTMLDivElement)
    this.chart.setOption({
      backgroundColor: '#fff',
      title: false,
      tooltip: {
        trigger: 'axis'
      },
      grid: {
        top: 10,
        left: '2%',
        right: '2%',
        bottom: '2%',
        containLabel: true
      },
      xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLine: {
          lineStyle: {
            color: '#57617B'
          }
        },
        data: this.data.xAxis
      }],
      yAxis: [{
        type: 'value',
        name: '',
        axisTick: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: '#57617B'
          }
        },
        axisLabel: {
          margin: 10,
          fontSize: 14
        },
        splitLine: {
          lineStyle: {
            color: '#eef3f8'
          }
        }
      }],
      series: [ {
        name: this.data.name,
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
          width: 1
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(148, 200, 251, 0.2)'
          }, {
            offset: 0.8,
            color: 'rgba(0, 136, 212, 0)'
          }], false) as any,
          shadowColor: 'rgba(0, 0, 0, 0.1)',
          shadowBlur: 10
        },
        itemStyle: {
          color: 'rgb(0,146,250)',
          borderColor: 'rgba(0,136,212,0.2)',
          borderWidth: 12
        },
        data: this.data.data
      }]
    } as EChartOption<EChartOption.SeriesLine>)
  }
}

</script>
