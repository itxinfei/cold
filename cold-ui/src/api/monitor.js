import request from '@/utils/request';
export const getStorehouseMonitor = (params) => request({
    url: 'device/monitor/list',
    method: 'get',
    params
});
export const setOperation = (params) => request({
    url: 'monitor/operation',
    method: 'post',
    params
});
//# sourceMappingURL=monitor.js.map