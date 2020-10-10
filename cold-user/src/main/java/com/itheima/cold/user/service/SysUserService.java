package com.itheima.cold.user.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.itheima.cold.common.user.entity.SysUserEntity;


/**
 * 系统用户
 *
 *
 */
public interface SysUserService extends IService<SysUserEntity> {
	/**
	 * 根据用户名，查询系统用户
	 */
	SysUserEntity queryByUserName(String username);
}
