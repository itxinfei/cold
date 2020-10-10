package com.itheima.cold.admin.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.itheima.cold.common.admin.entity.CompanyEntity;
import com.itheima.cold.common.utils.PageUtils;

import java.util.Map;

/**
 * 企业信息表
 *
 */
public interface CompanyService extends IService<CompanyEntity> {

    PageUtils queryPage(Map<String, Object> params);
}

