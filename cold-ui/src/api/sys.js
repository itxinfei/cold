import request from '@/utils/request';
// 菜单管理 - 列表
export const getMenuList = (params) => request({
    url: 'sys/menu/list',
    method: 'get',
    params
});
// 菜单管理 - 保存
export const saveMenu = (params) => request({
    url: `/sys/menu/${!params.id ? 'save' : 'update'}`,
    method: 'post',
    headers: {
        "Content-Type": "application/json;"
    },
    data: params
});
// 菜单管理 - 详情
export const menuDetail = (params) => request({
    url: 'sys/menu/info/' + params,
    method: 'get',
    params
});
// 菜单管理 - 删除
export const deleteMenu = (params) => request({
    url: 'sys/menu/delete/' + params,
    method: 'post',
    params
});
// 菜单管理 - 选择
export const selectMenu = (params) => request({
    url: 'sys/menu/select',
    method: 'get',
    params
});
//# sourceMappingURL=sys.js.map