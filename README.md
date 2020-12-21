![](byll.png)

<p align="center">
  <a href="https://gitee.com/itxinfei">
    <img alt="code style" src="https://img.shields.io/badge/心飞为你飞-https%3A%2F%2Fgitee.com%2Fitxinfei-green">
  </a> 
  <a href="https://qm.qq.com/cgi-bin/qm/qr?k=9yLlyD1dRBL97xmBKw43zRt0-6xg8ohb&jump_from=webapi">
    <img alt="code style" src="https://img.shields.io/badge/QQ群-863662849-red">
  </a> 
  <a href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=f0hLSE9OTkdHTT8ODlEcEBI">
    <img alt="code style" src="https://img.shields.io/badge/mail-747011882@qq.com-red">
  </a> 

  <a href=" ">
    <img alt="code style" src="https://img.shields.io/badge/JDK-1.8%2B-brightgreen">
  </a> 
  <a href=" ">
    <img alt="maven" src="https://img.shields.io/badge/maven-3.6.3%2B-yellowgreen">
  </a>
  <a href=" ">
    <img alt="code style" src="https://img.shields.io/badge/license-Apache-green">
  </a> 
</p>

### 演示地址：
http://mp-bingyan-java.itheima.net/cold/index.html

#### 项目介绍
冰眼冷链物流设备监控系统，是一款应用于食品生鲜、医药冷链的仓储、运输环节中针对温度、湿度、电量等进行监控、预警和统计分析的系统。实现了冷链监控环节的数据采集自动化、监控指标配置化、预警通知自动化、统计分析可视化，从而提升了生鲜、药品仓储、运输的安全管控水平，增强了企业对业务各环节的管理和控制。

#### 冷链监控
因为在冷链物资流转过程中，对物资的生产、运输、存储、销售时的温度、湿度等各种指标要求比较高，为了减轻人工成本、提高设备检测的可靠性，需要专门的软件系统来进行系统化、自动化操作。

冷眼物流设备监控系统是一款应用于对食品、药品冷链仓储、运输的环节中针对温度、湿度、电量等进行监控、预警和统计分析的系统。
实现了冷链监控环节的：

- 数据采集自动化
- 监控指标配置化
- 预警通知自动化
- 统计分析可视化

从而提升了生鲜、药品仓储、运输的安全管控水平，增强了政府、企业对业务各环节的了解和管理。

#### 系统用例图

![输入图片说明](https://images.gitee.com/uploads/images/2020/1010/103630_d143b566_800553.png "屏幕截图.png")

#### 任务流程图

![输入图片说明](https://images.gitee.com/uploads/images/2020/1010/103650_bdf1fd98_800553.png "屏幕截图.png")

#### 数据流程图

![输入图片说明](https://images.gitee.com/uploads/images/2020/1010/103707_487891f6_800553.png "屏幕截图.png")

#### 系统架构图 

![输入图片说明](https://images.gitee.com/uploads/images/2020/1010/103609_77a6ce43_800553.png "屏幕截图.png")

#### 技术架构图

![输入图片说明](https://images.gitee.com/uploads/images/2020/1010/103756_08cb8093_800553.png "屏幕截图.png")

#### 物理部署图

![输入图片说明](https://images.gitee.com/uploads/images/2020/1010/103814_dbd2081e_800553.png "屏幕截图.png")

#### 微服务拆分

```
cold
├── cold-user # 用户服务
├── cold-admin # 业务管理、系统管理服务
└── cold-common # 对象实体、公共组件
└── cold-monitor # 实时数据查询
└── cold-druid # 历史数据查询
└── cold-eureka # Spring cloud服务注册中心
└── cold-gateway # Spring cloud网关
└── cold-flink # 实时数据处理
└── cold-jobs # 分布式任务调度（硬件模拟）
└── cold-netty-server # 设备报文接收服务
cold-ui         # 前台页面
```

- cold-eureka 8001 服务注册中心
- cold-gateway 8080 API网关，前端统一
- cold-user 8185 用户服务 
- cold-admin 8181 管理服务
- cold-druid 8182 Druid查询服务 
- cold-monitor 8183 实时查询服务
- cold-jobs 8184 定时任务服务
- cold-netty-server 10010 netty服务器
- cold-ui 8000 web服务

docker安装软件
- docker run --name superset -d -p 7088:8088 -v /opt/docker/superset:/home/superset amancevice/superset
初始化superset数据库
- docker exec -it superset superset db upgrade
初始化superset
- docker exec -it superset superset init
设置用户名和密码， 密码设置为： admin123
- docker exec -it superset fabmanager create-admin --app superset