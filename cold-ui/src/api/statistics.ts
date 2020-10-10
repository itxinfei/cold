import request from '@/utils/request'
// 统计列表
export const getStatisticsList = (params: any) =>
  request({
    url: 'statistics/list',
    method: 'get',
    params
  })
