package com.itheima.cold.jobs.task;

import com.itheima.cold.jobs.utils.DeviceClientFactory;
import org.springframework.stereotype.Component;

@Component("deviceSenderTask")
public class DeviceSenderTask implements ITask {
    @Override
    public void run(String params) {

        DeviceClientFactory.getInstance().sendDeviceMessage(params);
    }

}
