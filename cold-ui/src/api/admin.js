import request from '@/utils/request';
// 企业管理 - 列表
export const getCompanyList = (params) => request({
    url: 'admin/company/list',
    method: 'get',
    params
});
// 企业管理 - 新增
export const addCompany = (params) => request({
    url: 'admin/company/save',
    method: 'post',
    headers: {
        "Content-Type": "application/json;"
    },
    data: params
});
// 企业管理 - 修改
export const putCompany = (params) => request({
    url: `admin/company/update`,
    method: 'put',
    headers: {
        "Content-Type": "application/json;"
    },
    data: params
});
// 企业管理 - 删除
export const delCompany = (params) => request({
    url: `admin/company/delete`,
    method: 'delete',
    headers: {
        "Content-Type": "application/json;"
    },
    params
});
// 库房管理 - 列表
export const getStorehouseList = (params) => request({
    url: `admin/warehouse/list`,
    method: 'get',
    params
});
// 库房管理 - 新增
export const addStorehouse = (params) => request({
    url: `admin/warehouse/save`,
    method: 'post',
    headers: {
        "Content-Type": "application/json;"
    },
    data: params
});
// 库房管理 - 修改
export const putStorehouse = (params) => request({
    url: `admin/warehouse/update`,
    method: 'put',
    headers: {
        "Content-Type": "application/json;"
    },
    data: params
});
// 库房管理 - 删除
export const delStorehouseList = (params) => request({
    url: `admin/warehouse/delete`,
    method: 'delete',
    params
});
// 主机管理 - 列表
export const getHostList = (params) => request({
    url: 'admin/host/list',
    method: 'get',
    params
});
// 主机管理 - 新增
export const addHost = (params) => request({
    url: 'admin/host/save',
    method: 'post',
    headers: {
        "Content-Type": "application/json;"
    },
    data: params
});
// 主机管理 - 修改
export const putHost = (params) => request({
    url: 'admin/host/update',
    method: 'put',
    headers: {
        "Content-Type": "application/json;"
    },
    data: params
});
// 主机管理 - 删除
export const delHost = (params) => request({
    url: `admin/host/delete`,
    method: 'delete',
    params
});
// 主机管理 - 停用
export const stopHost = (params) => request({
    url: `/admin/host/stop/${params.id}`,
    method: 'put',
    params
});
// 主机管理 - 重启
export const restartHost = (params) => request({
    url: `/admin/host/restart/${params.id}`,
    method: 'put',
    params
});
// 仪表管理 -列表
export const getMeterList = (params) => request({
    url: 'admin/meter/list',
    method: 'get',
    params
});
// 仪表管理 -新增
export const addMeter = (params) => request({
    url: 'admin/meter/save',
    method: 'post',
    headers: {
        "Content-Type": "application/json;"
    },
    data: params
});
// 仪表管理 -修改
export const putMeter = (params) => request({
    url: `admin/meter/update`,
    method: 'put',
    headers: {
        "Content-Type": "application/json;"
    },
    data: params
});
// 仪表管理 -删除
export const delMeter = (params) => request({
    url: `admin/meter/delete`,
    method: 'delete',
    params
});
// 定时任务 - 列表
// 仪表管理 -列表
export const getJobList = (params) => request({
    url: 'system/schedule/list',
    method: 'get',
    params
});
// 定时任务 - 详情
export const getJob = (params) => request({
    url: `system/schedule/info/${params}`,
    method: 'get',
    params
});
// 定时任务 - 保存
export const saveJob = (params) => request({
    url: `/system/schedule/${!params.jobId ? 'save' : 'update'}`,
    method: 'post',
    headers: {
        "Content-Type": "application/json;"
    },
    data: params
});
// 定时任务 - 修改
export const updateJob = (params) => request({
    url: `system/schedule/update`,
    method: 'post',
    headers: {
        "Content-Type": "application/json;"
    },
    data: params
});
// 定时任务 - 删除
export const deleteJob = (params) => request({
    url: `system/schedule/delete`,
    method: 'post',
    headers: {
        "Content-Type": "application/json;"
    },
    data: params
});
// 定时任务 - 立即执行
export const runJob = (params) => request({
    url: `system/schedule/run`,
    method: 'post',
    headers: {
        "Content-Type": "application/json;"
    },
    data: params
});
// 定时任务 - 暂停任务
export const pauseJob = (params) => request({
    url: `system/schedule/pause`,
    method: 'post',
    headers: {
        "Content-Type": "application/json;"
    },
    data: params
});
// 定时任务 - 恢复任务
export const resumeJob = (params) => request({
    url: `system/schedule/resume`,
    method: 'post',
    headers: {
        "Content-Type": "application/json;"
    },
    data: params
});
// 定时任务 - 日志列表
export const jobLogList = (params) => request({
    url: `system/schedule/log/list`,
    method: 'get',
    headers: {
        "Content-Type": "application/json;"
    },
    params
});
// 定时任务 - 日志详情
export const jobLog = (params) => request({
    url: `/system/schedule/log/info/${params}`,
    method: 'get'
});
//# sourceMappingURL=admin.js.map