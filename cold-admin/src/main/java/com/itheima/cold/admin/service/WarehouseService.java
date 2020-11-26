package com.itheima.cold.admin.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.itheima.cold.common.admin.entity.WarehouseEntity;
import com.itheima.cold.common.utils.PageUtils;

import java.util.Map;

/**
 * 库房管理
 */
public interface WarehouseService extends IService<WarehouseEntity> {
    PageUtils queryPage(Map<String, Object> params);
}

