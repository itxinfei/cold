package com.itheima.cold.common.admin.dao;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.itheima.cold.common.admin.entity.HostEntity;
import org.apache.ibatis.annotations.Mapper;

/**
 * 主机表
 *
 */
@Mapper
public interface HostDao extends BaseMapper<HostEntity> {
	
}
