(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3176f2a6"],{1028:function(t,e,a){},"555a":function(t,e,a){t.exports=a.p+"img/icon.70d68b24.png"},9406:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dashboard-container"},[i("div",{staticClass:"topInfo"},[i("div",{staticClass:"userInfo"},[i("img",{staticClass:"icon",attrs:{src:a("555a"),alt:""}}),i("div",[i("div",[t._v("欢迎，"+t._s(t.name)+"，祝您开心每一天")]),i("div",{staticClass:"time"},[t._v("上次登录时间: "+t._s(t.logintime))])])]),i("div",{staticClass:"total"},[i("div",{staticClass:"label"},[i("div",{staticClass:"num"},[t._v(t._s(t.totalData.equipmentTotal))]),i("div",[t._v("设备数")])]),i("div",{staticClass:"label"},[i("div",{staticClass:"num"},[t._v(t._s(t.totalData.organizationTotal))]),i("div",[t._v("机构数")])]),i("div",{staticClass:"label"},[i("div",{staticClass:"num"},[t._v(t._s(t.totalData.warningTotal))]),i("div",[t._v("警告数")])])])]),i("div",{staticClass:"dashboard-cont"},[i("div",{staticClass:"title"},[i("div",[t._v("实时监控图")]),i("div",{staticClass:"info"},[i("div",{staticClass:"lab"},[i("div",{staticClass:"num"},[t._v(t._s(t.totalData.meterTotal))]),i("div",[t._v("总仪表数")])]),i("div",{staticClass:"lab"},[i("div",{staticClass:"num"},[t._v(t._s(t.totalData.accuracy)+" %")]),i("div",[t._v("正常率")])]),i("div",{staticClass:"lab"},[i("div",{staticClass:"num"},[t._v(t._s(t.totalData.unaccomplished))]),i("div",[t._v("待处理")])]),i("div",{staticClass:"lab"},[i("div",{staticClass:"num"},[t._v(t._s(t.totalData.finishNumber))]),i("div",[t._v("已处理")])])])]),i("div",{staticClass:"content",staticStyle:{height:"300px"}},[t.mapData?i("BaiduMap",{attrs:{data:t.mapData}}):t._e()],1)]),t._m(0),t._m(1),t._m(2)])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-cont",staticStyle:{height:"500px"}},[a("div",{staticClass:"title"},[t._v("昌平二号仓温度预警趋势/小时")]),a("div",{staticClass:"cont"},[a("iframe",{attrs:{width:"1000",height:"400",seamless:"",frameBorder:"0",scrolling:"no",src:"http://172.17.0.143:7088/superset/explore/?form_data=%7B%22datasource%22%3A%221__druid%22%2C%22viz_type%22%3A%22big_number%22%2C%22slice_id%22%3A9%2C%22url_params%22%3A%7B%7D%2C%22granularity%22%3A%22PT1H%22%2C%22druid_time_origin%22%3A%22now%22%2C%22time_range%22%3A%22No+filter%22%2C%22metric%22%3A%22count%22%2C%22adhoc_filters%22%3A%5B%7B%22expressionType%22%3A%22SIMPLE%22%2C%22subject%22%3A%22temalert%22%2C%22operator%22%3A%22%21%3D%22%2C%22comparator%22%3A%220%22%2C%22clause%22%3A%22WHERE%22%2C%22sqlExpression%22%3Anull%2C%22fromFormData%22%3Atrue%2C%22filterOptionName%22%3A%22filter_us99vlish7_82rhkkinfe%22%7D%2C%7B%22expressionType%22%3A%22SIMPLE%22%2C%22subject%22%3A%22housename%22%2C%22operator%22%3A%22%3D%3D%22%2C%22comparator%22%3A%22%E6%98%8C%E5%B9%B3%E4%BA%8C%E5%8F%B7%E4%BB%93%22%2C%22clause%22%3A%22WHERE%22%2C%22sqlExpression%22%3Anull%2C%22fromFormData%22%3Atrue%2C%22filterOptionName%22%3A%22filter_vn9sfhshmyr_ygrw0prgzj%22%7D%5D%2C%22compare_lag%22%3A%22%22%2C%22y_axis_format%22%3A%22.3s%22%2C%22show_trend_line%22%3Atrue%2C%22start_y_axis_at_zero%22%3Atrue%2C%22color_picker%22%3A%7B%22r%22%3A0%2C%22g%22%3A122%2C%22b%22%3A135%2C%22a%22%3A1%7D%7D&standalone=true&height=400"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"disFlex"},[a("div",{staticClass:"cont",staticStyle:{height:"450px"}},[a("div",{staticClass:"title"},[t._v("故障设备/小时")]),a("div",{staticClass:"content"},[a("iframe",{attrs:{width:"1000",height:"400",seamless:"",frameBorder:"0",scrolling:"no",src:"http://172.17.0.143:7088/superset/explore/?form_data=%7B%22datasource%22%3A%221__druid%22%2C%22viz_type%22%3A%22pie%22%2C%22slice_id%22%3A10%2C%22url_params%22%3A%7B%7D%2C%22granularity%22%3A%22PT1H%22%2C%22druid_time_origin%22%3A%22now%22%2C%22time_range%22%3A%22No+filter%22%2C%22metric%22%3A%7B%22expressionType%22%3A%22SIMPLE%22%2C%22column%22%3A%7B%22id%22%3A17%2C%22column_name%22%3A%22meterid%22%2C%22verbose_name%22%3Anull%2C%22description%22%3Anull%2C%22expression%22%3Anull%2C%22filterable%22%3Atrue%2C%22groupby%22%3Atrue%2C%22is_dttm%22%3Anull%2C%22type%22%3A%22STRING%22%2C%22optionName%22%3A%22_col_meterid%22%7D%2C%22aggregate%22%3A%22COUNT%22%2C%22sqlExpression%22%3Anull%2C%22hasCustomLabel%22%3Afalse%2C%22fromFormData%22%3Atrue%2C%22label%22%3A%22COUNT%28meterid%29%22%2C%22optionName%22%3A%22metric_6akyt2liz9_1bovx2oorbp%22%7D%2C%22adhoc_filters%22%3A%5B%7B%22expressionType%22%3A%22SIMPLE%22%2C%22subject%22%3A%22state%22%2C%22operator%22%3A%22%21%3D%22%2C%22comparator%22%3A%221%22%2C%22clause%22%3A%22WHERE%22%2C%22sqlExpression%22%3Anull%2C%22fromFormData%22%3Atrue%2C%22filterOptionName%22%3A%22filter_12dkdd2vrd3i_erq0b9sirhs%22%7D%5D%2C%22groupby%22%3A%5B%22housename%22%5D%2C%22row_limit%22%3Anull%2C%22pie_label_type%22%3A%22key%22%2C%22donut%22%3Afalse%2C%22show_legend%22%3Atrue%2C%22show_labels%22%3Atrue%2C%22labels_outside%22%3Atrue%2C%22color_scheme%22%3A%22bnbColors%22%7D&standalone=true&height=400"}})])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"disFlex"},[a("div",{staticClass:"cont",staticStyle:{height:"450px"}},[a("div",{staticClass:"title"},[t._v("温度预警Top 5")]),a("div",{staticClass:"content"},[a("iframe",{attrs:{width:"1000",height:"400",seamless:"",frameBorder:"0",scrolling:"no",src:"http://172.17.0.143:7088/superset/explore/?form_data=%7B%22datasource%22%3A%221__druid%22%2C%22viz_type%22%3A%22bar%22%2C%22slice_id%22%3A11%2C%22url_params%22%3A%7B%7D%2C%22granularity%22%3A%22PT1H%22%2C%22druid_time_origin%22%3A%22%22%2C%22time_range%22%3A%22Next+1+days%22%2C%22metrics%22%3A%5B%22count%22%5D%2C%22adhoc_filters%22%3A%5B%7B%22expressionType%22%3A%22SIMPLE%22%2C%22subject%22%3A%22temalert%22%2C%22operator%22%3A%22%21%3D%22%2C%22comparator%22%3A%220%22%2C%22clause%22%3A%22WHERE%22%2C%22sqlExpression%22%3Anull%2C%22fromFormData%22%3Atrue%2C%22filterOptionName%22%3A%22filter_0yma0p5f917s_vsed46ifprf%22%7D%5D%2C%22groupby%22%3A%5B%22metername%22%5D%2C%22limit%22%3A5%2C%22timeseries_limit_metric%22%3A%22count%22%2C%22order_desc%22%3Atrue%2C%22contribution%22%3Afalse%2C%22row_limit%22%3A10%2C%22color_scheme%22%3A%22bnbColors%22%2C%22show_brush%22%3A%22auto%22%2C%22show_legend%22%3Atrue%2C%22show_bar_value%22%3Afalse%2C%22rich_tooltip%22%3Atrue%2C%22bar_stacked%22%3Afalse%2C%22line_interpolation%22%3A%22linear%22%2C%22show_controls%22%3Afalse%2C%22bottom_margin%22%3A%22auto%22%2C%22x_axis_label%22%3A%22%22%2C%22x_ticks_layout%22%3A%22auto%22%2C%22x_axis_format%22%3A%22smart_date%22%2C%22x_axis_showminmax%22%3Afalse%2C%22reduce_x_ticks%22%3Afalse%2C%22y_axis_label%22%3A%22%22%2C%22left_margin%22%3A%22auto%22%2C%22y_axis_showminmax%22%3Afalse%2C%22y_log_scale%22%3Afalse%2C%22y_axis_format%22%3A%22.3s%22%2C%22y_axis_bounds%22%3A%5Bnull%2Cnull%5D%2C%22rolling_type%22%3A%22None%22%2C%22comparison_type%22%3A%22values%22%2C%22resample_how%22%3Anull%2C%22resample_rule%22%3Anull%2C%22resample_fillmethod%22%3Anull%2C%22annotation_layers%22%3A%5B%5D%7D&standalone=true&height=400"}})])])])}],s=(a("96cf"),a("3b8d")),n=a("d225"),o=a("b0b4"),l=a("308d"),c=a("6bb5"),u=a("4e2b"),d=a("9ab4"),m=a("60a3"),C=a("0f9a"),p=a("a358"),_=a("0926"),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,style:{height:t.height,width:t.width},attrs:{id:t.id}})},f=[],A=a("313e"),v=a.n(A),b=a("2fe1"),g=a("f42c"),y=function(t){function e(){return Object(n["a"])(this,e),Object(l["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),Object(o["a"])(e,[{key:"mounted",value:function(){var t=this;this.$nextTick(function(){t.initChart()})}},{key:"beforeDestroy",value:function(){this.chart&&(this.chart.dispose(),this.chart=null)}},{key:"initChart",value:function(){this.chart=v.a.init(document.getElementById(this.id)),this.chart.setOption({backgroundColor:"#fff",title:void 0,tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{orient:"vertical",x:"left",data:["正常运行","离线","报警","预报警"]},toolbox:{show:!0,feature:{mark:{show:!0},magicType:{show:!0,type:["pie","funnel"],option:{funnel:{x:"25%",width:"50%",funnelAlign:"left",max:1548}}}}},series:[{name:"访问来源",type:"pie",radius:"70%",center:["50%","50%"],data:[{value:235,name:"正常运行",itemStyle:{color:"#536acc"}},{value:10,name:"离线",itemStyle:{color:"#ed9875"}},{value:34,name:"报警",itemStyle:{color:"#5cb7c7"}},{value:35,name:"预报警",itemStyle:{color:"#8598e8"}}]}]})}}]),e}(Object(b["c"])(g["a"]));d["a"]([Object(m["b"])({default:"chart"})],y.prototype,"className",void 0),d["a"]([Object(m["b"])({default:"chart"})],y.prototype,"id",void 0),d["a"]([Object(m["b"])({default:"200px"})],y.prototype,"width",void 0),d["a"]([Object(m["b"])({default:"200px"})],y.prototype,"height",void 0),y=d["a"]([Object(m["a"])({name:"PieChart"})],y);var x=y,D=x,w=a("2877"),O=Object(w["a"])(D,h,f,!1,null,null,null),j=O.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("baidu-map",{staticClass:"map",attrs:{center:"北京","scroll-wheel-zoom":!0,zoom:10}},[t.data?a("div",t._l(t.data,function(t,e){return a("bm-circle",{key:e,attrs:{center:t.markerPoint,fillColor:"blue",fillOpacity:.3,radius:1e3,"stroke-color":"blue","stroke-opacity":.1,"stroke-weight":1}})}),1):t._e()])],1)},B=[],E=function(t){function e(){var t;return Object(n["a"])(this,e),t=Object(l["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.show=!1,t}return Object(u["a"])(e,t),Object(o["a"])(e,[{key:"infoWindowClose",value:function(){this.show=!1}},{key:"infoWindowOpen",value:function(){this.show=!0}},{key:"created",value:function(){console.log(this.data)}}]),e}(m["c"]);d["a"]([Object(m["b"])({default:[]})],E.prototype,"data",void 0),E=d["a"]([Object(m["a"])({})],E);var T=E,N=T,S=(a("d3dd"),Object(w["a"])(N,k,B,!1,null,"09391dee",null)),I=S.exports,P=function(t){function e(){var t;return Object(n["a"])(this,e),t=Object(l["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.totalData={},t.operationData=[],t.mapData=[],t.listQuery={companyId:0,state:0},t.dataItem={name:"设备数",xAxis:["13:00","13:05","13:10","13:15","13:20","13:25","13:30","13:35","13:40","13:45","13:50","13:55"],data:[120,110,125,145,122,165,122,220,182,191,134,150]},t}return Object(u["a"])(e,t),Object(o["a"])(e,[{key:"getMapData",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(p["a"])(this.listQuery);case 2:e=t.sent,a=e.data,console.log(a),this.mapData=a;case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},{key:"getTotalData",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(p["c"])({});case 2:e=t.sent,a=e.data,this.totalData=a;case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},{key:"getOperation",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(p["b"])({page:1,pagesize:4});case 2:e=t.sent,a=e.data,this.operationData=a.items;case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},{key:"created",value:function(){this.getMapData(),this.getTotalData(),this.getOperation()}},{key:"name",get:function(){return C["a"].username}},{key:"logintime",get:function(){return C["a"].logintime}}]),e}(m["c"]);P=d["a"]([Object(m["a"])({name:"Dashboard",components:{LineChart:_["a"],BaiduMap:I,PieChart:j}})],P);var R=P,z=R,M=(a("e946"),Object(w["a"])(z,i,r,!1,null,"ec2d0906",null));e["default"]=M.exports},a358:function(t,e,a){"use strict";a.d(e,"c",function(){return r}),a.d(e,"b",function(){return s}),a.d(e,"a",function(){return n});var i=a("b775"),r=function(t){return Object(i["a"])({url:"admin/api/total",method:"get",params:t})},s=function(t){return Object(i["a"])({url:"admin/api/operationlog",method:"get",params:t})},n=function(t){return Object(i["a"])({url:"admin/warehouse/realTime",method:"get",params:t})}},a4b3:function(t,e,a){},d3dd:function(t,e,a){"use strict";var i=a("a4b3"),r=a.n(i);r.a},e946:function(t,e,a){"use strict";var i=a("1028"),r=a.n(i);r.a}}]);
//# sourceMappingURL=chunk-3176f2a6.88d48618.js.map