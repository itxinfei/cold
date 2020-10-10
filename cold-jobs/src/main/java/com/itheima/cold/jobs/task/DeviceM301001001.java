package com.itheima.cold.jobs.task;

import com.itheima.cold.jobs.utils.DeviceClientFactory;
import org.springframework.stereotype.Component;

@Component("deviceM301001001")
public class DeviceM301001001 implements ITask {
    @Override
    public void run(String params) {
        if( params == null ){
            params = "M301001001";
        }

        DeviceClientFactory.getInstance().sendDeviceMessage(params);
    }
}
