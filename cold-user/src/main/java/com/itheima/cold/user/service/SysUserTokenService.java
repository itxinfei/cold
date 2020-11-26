package com.itheima.cold.user.service;

import com.itheima.cold.common.utils.Result;
import com.baomidou.mybatisplus.extension.service.IService;
import com.itheima.cold.common.user.entity.SysUserTokenEntity;

/**
 * 用户Token
 */
public interface SysUserTokenService extends IService<SysUserTokenEntity> {

    /**
     * 生成token
     *
     * @param userId 用户ID
     */
    Result createToken(long userId);

    /**
     * 退出，删除token记录
     */
    void logout(String token);

}
