package com.itheima.cold.jobs.task;

import com.itheima.cold.jobs.utils.DeviceClientFactory;
import org.springframework.stereotype.Component;

@Component("deviceM402003001")
public class DeviceM402003001 implements ITask {
    @Override
    public void run(String params) {
        if( params == null || params.isEmpty()){
            params = "M402003001";
        }

        DeviceClientFactory.getInstance().sendDeviceMessage(params);
    }
}
