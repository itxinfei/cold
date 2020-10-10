import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/layout/index.vue';
Vue.use(Router);
/*
  redirect:                      if set to 'noredirect', no redirect action will be trigger when clicking the breadcrumb
  meta: {
    title: 'title'               the name showed in subMenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon showed in the sidebar
    breadcrumb: false            if false, the item will be hidden in breadcrumb (default is true)
    hidden: true                 if true, this route will not show in the sidebar (default is false)
  }
*/
export default new Router({
    // mode: 'history',  // Enable this if you need.
    scrollBehavior: (to, from, savedPosition) => {
        if (savedPosition) {
            return savedPosition;
        }
        else {
            return { x: 0, y: 0 };
        }
    },
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/login',
            component: () => import(/* webpackChunkName: "login" */ '@/views/login/index.vue'),
            meta: { hidden: true }
        },
        {
            path: '/404',
            component: () => import(/* webpackChunkName: "404" */ '@/views/404.vue'),
            meta: { hidden: true }
        },
        {
            path: '/',
            component: Layout,
            redirect: '/index',
            children: [
                {
                    path: 'index',
                    component: () => import('@/views/dashboard/index.vue'),
                    meta: {
                        title: '工作台',
                        icon: 'ind'
                    }
                }
            ]
        },
        {
            path: '/monitoring',
            component: Layout,
            redirect: '/monitoring/realTime',
            meta: {
                title: '监控管理',
                icon: 'monitor'
            },
            children: [
                {
                    path: 'realTime',
                    component: () => import('@/views/monitoring/realTime.vue'),
                    meta: {
                        title: ' 实时监控',
                    }
                },
                {
                    path: 'storehouse',
                    component: () => import('@/views/monitoring/storehouse.vue'),
                    meta: {
                        title: ' 仓储监控',
                    }
                }
            ]
        },
        {
            path: '/callPolice',
            component: Layout,
            redirect: '/callPolice/callPoliceSet',
            meta: {
                title: '报警管理',
                icon: 'callplace'
            },
            children: [
                // {
                //   path: 'callPoliceSet',
                //   component: () => import('@/views/callPolice/callPoliceSet.vue'),
                //   meta: {
                //     title: ' 报警配置',
                //   }
                // },
                {
                    path: 'realTimeCallPolice',
                    component: () => import('@/views/callPolice/realTimeCallPolice.vue'),
                    meta: {
                        title: ' 实时报警',
                    }
                },
                {
                    path: 'callPoliceLog',
                    component: () => import('@/views/callPolice/callPoliceLog.vue'),
                    meta: {
                        title: ' 报警记录',
                    }
                }
                // ,
                // {
                //   path: 'storehouseHistoryLog',
                //   component: () => import('@/views/historyLog/storehouseHistoryLog.vue'),
                //   meta: {
                //     title: ' 历史记录',
                //   }
                // }
            ]
        },
        {
            path: '/Statistics',
            component: Layout,
            redirect: '/Statistics/main',
            children: [
                {
                    path: '/main',
                    component: () => import('@/views/Statistics/index.vue'),
                    meta: {
                        title: '统计报表',
                        icon: 'statistics'
                    }
                }
            ]
        },
        // {
        //   path: '/historyLog',
        //   component: Layout,
        //   redirect: '/historyLog/storehouseCallPoliceLog',
        //   meta: {
        //     title: '历史记录',
        //     icon: 'log'
        //   },
        //   children: [
        //     {
        //       path: 'storehouseCallPoliceLog',
        //       component: () => import('@/views/historyLog/storehouseCallPoliceLog.vue'),
        //       meta: {
        //         title: ' 仓储报警记录',
        //       }
        //     },
        //     {
        //       path: 'storehouseHistoryLog',
        //       component: () => import('@/views/historyLog/storehouseHistoryLog.vue'),
        //       meta: {
        //         title: ' 仓储历史记录',
        //       }
        //     }
        //   ]
        // },
        {
            path: '/admin',
            component: Layout,
            redirect: '/admin/company',
            meta: {
                title: '系统管理',
                icon: 'set'
            },
            children: [
                {
                    path: 'company',
                    component: () => import('@/views/admin/company.vue'),
                    meta: {
                        title: ' 企业管理',
                    }
                },
                {
                    path: 'warehouse',
                    component: () => import('@/views/admin/warehouse.vue'),
                    meta: {
                        title: ' 库房管理',
                    }
                },
                {
                    path: 'host',
                    component: () => import('@/views/admin/host.vue'),
                    meta: {
                        title: ' 主机管理',
                    }
                },
                {
                    path: 'meter',
                    component: () => import('@/views/admin/meter.vue'),
                    meta: {
                        title: ' 仪表管理',
                    }
                },
                {
                    path: 'job',
                    component: () => import('@/views/job/schedule.vue'),
                    meta: {
                        title: ' 定时任务',
                    }
                }
            ]
        },
        {
            path: '*',
            redirect: '/404',
            meta: { hidden: true }
        }
    ]
});
//# sourceMappingURL=router.js.map