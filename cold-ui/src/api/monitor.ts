import request from '@/utils/request'

export const getStorehouseMonitor = (params: any) =>
  request({
    url: 'device/monitor/list',
    method: 'get',
    params
  })

export const setOperation = (params: any) =>
  request({
    url: 'monitor/operation',
    method: 'post',
    params
  })

