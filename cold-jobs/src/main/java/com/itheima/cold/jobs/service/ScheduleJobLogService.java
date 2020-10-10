package com.itheima.cold.jobs.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.itheima.cold.common.job.entity.ScheduleJobLogEntity;
import com.itheima.cold.common.utils.PageUtils;

import java.util.Map;

/**
 * 定时任务日志
 *
 *
 */
public interface ScheduleJobLogService extends IService<ScheduleJobLogEntity> {

	PageUtils queryPage(Map<String, Object> params);
	
}
