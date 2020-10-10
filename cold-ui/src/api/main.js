import request from '@/utils/request';
export const getTotal = (params) => request({
    url: 'admin/api/total',
    method: 'get',
    params
});
export const getOperation = (params) => request({
    url: 'admin/api/operationlog',
    method: 'get',
    params
});
export const getMapData = (params) => request({
    url: 'admin/warehouse/realTime',
    method: 'get',
    params
});
// export const getIndexMapData = (params: any) =>
//   request({
//     url: 'storehouse/realTime',
//     method: 'get',
//     params
//   })
//# sourceMappingURL=main.js.map