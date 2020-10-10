<template>
  <div
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
  name: 'PieChart'
})
export default class extends mixins(ResizeMixin) {
@Prop({ default: 'chart' }) private className!: string
@Prop({ default: 'chart' }) private id!: string
@Prop({ default: '200px' }) private width!: string
@Prop({ default: '200px' }) private height!: string

mounted() {
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
    title: undefined,
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      orient: 'vertical',
      x: 'left',
      data: ['正常运行', '离线', '报警', '预报警']
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        magicType: {
          show: true,
          type: ['pie', 'funnel'],
          option: {
            funnel: {
              x: '25%',
              width: '50%',
              funnelAlign: 'left',
              max: 1548
            }
          }
        }
      }
    },

    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: '70%',
        center: ['50%', '50%'],
        data: [
          { value: 235, name: '正常运行', itemStyle: { color: '#536acc' } },
          { value: 10, name: '离线', itemStyle: { color: '#ed9875' } },
          { value: 34, name: '报警', itemStyle: { color: '#5cb7c7' } },
          { value: 35, name: '预报警', itemStyle: { color: '#8598e8' } }
        ]
      }
    ]
  })
}
}
</script>
