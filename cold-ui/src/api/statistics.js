import request from '@/utils/request';
// 统计列表
export const getStatisticsList = (params) => request({
    url: 'statistics/list',
    method: 'get',
    params
});
//# sourceMappingURL=statistics.js.map