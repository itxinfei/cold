import request from '@/utils/request';
export const getWarningList = (params) => request({
    url: '/log/warning/list',
    method: 'get',
    params
});
export const getDruidList = (params) => request({
    url: 'apache-druid/query/select',
    method: 'get',
    params
});
//# sourceMappingURL=log.js.map