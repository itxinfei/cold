import request from '@/utils/request'

// 报警配置 - 列表
export const getWarningsetList = (params: any) =>
  request({
    url: 'monitor/setting/list',
    method: 'get',
    params
  })
// 报警配置 - 新增
export const addWarningset = (params: any) =>
  request({
    url: 'monitor/setting/save',
    method: 'post',
    headers: {
      "Content-Type": "application/json;"
    },
    data: params
  })
// 报警配置 - 修改
export const putWarningset = (params: any) =>
  request({
    url: `monitor/setting/update`,
    method: 'put',
    headers: {
      "Content-Type": "application/json;"
    },
    data: params
  })
// 报警配置 - 删除
export const delWarningset = (params: any) =>
  request({
    url: `monitor/setting/delete`,
    method: 'delete',
    params
  })



// 实时报警 - 列表
export const getWarningRealTimeList = (params: any) =>
  request({
  url: 'device/monitor/realtime',
  method: 'get',
  params
})
// 报警记录
export const getWarningLogList = (params: any) =>
  request({
    //url: 'device/monitor/history',
    url: 'apache-druid/query/select',
    method: 'get',
    params
  })

//温湿度实时曲线（24小时）
export const getTemHumchart = (params: any) =>
  request({
    //url: 'device/monitor/temhum',
    url: '/apache-druid/query/select',
    method: 'get',
    params
  })
