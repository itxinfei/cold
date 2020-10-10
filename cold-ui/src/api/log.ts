import request from '@/utils/request'

export const getWarningList = (params: any) =>
  request({
    url: '/log/warning/list',
    method: 'get',
    params
  })

export const getDruidList = (params: any) =>
  request({
    url: 'apache-druid/query/select',
    method: 'get',
    params
  })
