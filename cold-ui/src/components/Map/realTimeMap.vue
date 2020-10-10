<template>
  <div>
    <baidu-map class="map" center="北京" :scroll-wheel-zoom="true" :zoom="7">
      <div v-if="data">
        <bm-marker  v-for="(item, index) in data" :key="index" @click="infoWindowOpen(item)" :clicking="true" :position="item.markerPoint" :dragging="false" >
          <bm-info-window :show="item.infoWindowShowFlag" @close="infoWindowClose(item)" @open="infoWindowOpen(item)">
            <div class="info">
              <div class="itemList">
                <div><span>仓库名称：</span>{{item.housename}}</div>
                <div><span>企业全称：</span>{{item.companyname}}</div>
              </div>
              <!--<div class="itemList">-->
                <!--<div><span>仪表数量：</span>{{item.meterNumber}}</div>-->
                <!--<div><span>报警数量：</span>{{item.warningNumber}}</div>-->
              <!--</div>-->
              <div class="itemList">
                <div><span>质管人员：</span>{{item.principalname}}</div>
                <div><span>质管电话：</span>{{item.principaltel}}</div>
              </div>
              <div class="link">
                <router-link :to="{path: `/monitoring/storehouse`, query: {id: item.companyid}}">仓库实时监控</router-link>
              </div>
            </div>
          </bm-info-window>
        </bm-marker>
      </div>
    </baidu-map>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
})
export default class extends Vue {
  @Prop({ default: [] }) private data?: any
   private show = ''
   public infoWindowClose() {
     this.show = ''
   }
   public infoWindowOpen(position:any) {
     this.data && this.data.map((n:any) => {
       if (position.id === n.id) {
         n.infoWindowShowFlag = true
       } else {
         n.infoWindowShowFlag = false
       }
     })
     this.$forceUpdate()
   }
   created() {
     this.data && this.data.map((n:any) => {
       n.infoWindowShowFlag = false
     })
   }
}
</script>

<style lang="scss" scoped>
  .map{
    width: 100%;
    height: 700px;
  }
  .info{
    font-size: 14px;
    width: 400px;
    line-height: 30px;
    .itemList{
      display: flex;
      div{
        margin: 0 5px;
        flex:1;
      }
    }
    .link a{
      color:#186bd0;
      text-decoration: underline;
    }
  }
</style>
