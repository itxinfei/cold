package com.itheima.cold.jobs.controller;

import com.itheima.cold.common.job.entity.ScheduleJobLogEntity;
import com.itheima.cold.common.utils.PageUtils;
import com.itheima.cold.common.utils.Result;
import com.itheima.cold.jobs.service.ScheduleJobLogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

/**
 * 定时任务日志
 */
@RestController
@RequestMapping("/system/schedule/log")
public class ScheduleJobLogController {

    @Autowired
    private ScheduleJobLogService scheduleJobLogService;

    /**
     * 定时任务日志列表
     */
    @RequestMapping("/list")
    public Result list(@RequestParam Map<String, Object> params) {
        PageUtils page = scheduleJobLogService.queryPage(params);
        return Result.ok().put("page", page);
    }

    /**
     * 定时任务日志信息
     */
    @RequestMapping("/info/{logId}")
    public Result info(@PathVariable("logId") Long logId) {
        ScheduleJobLogEntity log = scheduleJobLogService.getById(logId);
        return Result.ok().put("log", log);
    }
}
