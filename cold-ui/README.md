## 冷链 - 后台管理

## 编译vue
npm install
## 本地运行web应用
npm run serve
## 生成dist目录
npm run build

## 技术栈
- vue + elementUI + typeScript

## 相关信息

 - git http://git.itcast.cn/development/project-coldChain-java-vue-ts.git
 
 - mock https://mock.boxuegu.com/project/470/interface/api/9011
 ## 页面
 ![img](./demo.png)
 ## 项目结构
 
 -- views -  主页面  <br>
    -- dashboard - index.vue 工作台 <br>
    --monitoring 监控记录<br>
       -- realTime.vue - 实时监控 <br>
       -- storehouse.vue - 仓储监控 <br>
    -- callPolice - 报警管理<br>
        -- callPoliceSet.vue - 报警配置<br>
        -- realTimeCallPolice.vue - 实时报警<br>
        -- callPoliceLog - 报警记录<br>
    -- Statistics - index.vue 统计报表<br>
    -- historyLog 历史记录<br>
        -- storehouseCallPoliceLog.vue -  仓储报警记录<br>
        -- storehouseHistoryLog.vue - 仓储历史记录<br>
    -- admin - 系统管理    <br>
        -- company.vue 企业管理<br>
        -- storehouse.vue 库房管理<br>
        -- host.vue 主机管理<br>
        -- meter.vue 仪表管理<br>
    -- login - 登录     

参考文档：

typescript: https://www.tslang.cn/docs/handbook/basic-types.html
elementUI: https://element.eleme.io/#/zh-CN/component
vue-element-admin:  https://panjiachen.github.io/vue-element-admin-site/zh/guide/
vue-baidu-map: https://dafrok.github.io/vue-baidu-map/#/zh/map/baidu-map

