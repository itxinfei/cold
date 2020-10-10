<template>
  <div>
    <baidu-map class="map" center="北京" :scroll-wheel-zoom="true" :zoom="10">
      <div v-if="data" >
        <bm-circle v-for="(item, index) in data" :key="index" :center="item.markerPoint" fillColor="blue" :fillOpacity="0.3" :radius="1000" stroke-color="blue" :stroke-opacity="0.1" :stroke-weight="1" ></bm-circle>
      </div>
        </baidu-map>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
})
export default class extends Vue {
  @Prop({ default: [] }) private data!: string
  private show = false
  public infoWindowClose() {
    this.show = false
  }
  public infoWindowOpen() {
    this.show = true
  }
  created() {
    console.log(this.data)
  }
}
</script>

<style lang="scss" scoped>
.map{
  width: 100%;
  height: 300px;
}
</style>
