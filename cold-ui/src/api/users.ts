import request from '@/utils/request'

export const getUserInfo = (data: any) =>
  request({
    url: 'sys/user/info',
    method: 'get',
    data
  })

export const login = (data: any) =>
  request({
    url: 'sys/user/login',
    method: 'post',
    data
  })

export const logout = () =>
  request({
    url: 'sys/user/logout',
    method: 'post'
  })
