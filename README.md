### 冰眼冷链

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
### 交流方式：

QQ技术交流群：863662849<a target="_blank" href="https://qm.qq.com/cgi-bin/qm/qr?k=9yLlyD1dRBL97xmBKw43zRt0-6xg8ohb&jump_from=webapi">
<img border="0" src="//pub.idqqimg.com/wpa/images/group.png" alt="Java项目交流+求职面试" title="Java项目交流+求职面试"></a><a target="_blank" href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=f0hLSE9OTkdHTT8ODlEcEBI" style="text-decoration:none;"><img src="http://rescdn.qqmail.com/zh_CN/htmledition/images/function/qm_open/ico_mailme_02.png"/></a>

![QQ技术交流群：863662849](https://images.gitee.com/uploads/images/2020/1022/145319_459f7be2_800553.png "QQ技术交流群.png")

### 整理不易，欢迎各位白嫖star
如果可以请各位大佬打赏一下，请我喝杯咖啡，资助一下云服务器，部署一个演示站点，感谢！！！

![输入图片说明](https://images.gitee.com/uploads/images/2020/1022/152637_f80669f5_800553.jpeg "支付宝收钱码.jpg")

![输入图片说明](https://images.gitee.com/uploads/images/2020/1022/152705_964cb145_800553.png "微信收钱码.png")