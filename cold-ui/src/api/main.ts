import request from '@/utils/request'

export const getTotal = (params: any) =>
  request({
    url: 'admin/api/total',
    method: 'get',
    params
  })

export const getOperation = (params: any) =>
  request({
    url: 'admin/api/operationlog',
    method: 'get',
    params
  })

export const getMapData = (params: any) =>
  request({
    url: 'admin/warehouse/realTime',
    method: 'get',
    params
  })

// export const getIndexMapData = (params: any) =>
//   request({
//     url: 'storehouse/realTime',
//     method: 'get',
//     params
//   })
