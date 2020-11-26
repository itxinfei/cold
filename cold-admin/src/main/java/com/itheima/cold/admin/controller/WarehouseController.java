package com.itheima.cold.admin.controller;

import com.itheima.cold.admin.service.WarehouseService;
import com.itheima.cold.common.admin.entity.WarehouseEntity;
import com.itheima.cold.common.utils.PageUtils;
import com.itheima.cold.common.utils.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;


/**
 * 库房管理
 */
@RestController
@RequestMapping("admin/warehouse")
public class WarehouseController {
    @Autowired
    private WarehouseService warehouseService;

    /**
     * 列表
     */
    @RequestMapping("/list")
    public Result list(@RequestParam Map<String, Object> params) {
        PageUtils page = warehouseService.queryPage(params);

        return Result.ok(page.getPageMap());
    }

    /**
     * 实时仓库列表
     */
    @RequestMapping("/realTime")
    public Result realtimeList(@RequestParam Map<String, Object> params) {
        String companyid = params.get("companyId").toString();
        if (companyid.equals("0")) {  //查询所有
            params.remove("companyId");
        }

        PageUtils page = warehouseService.queryPage(params);

        //经纬度坐标格式转换
        List<WarehouseEntity> map = (List<WarehouseEntity>) page.getPageMap().get("items");
        for (int i = 0; i < map.size(); i++) {
            WarehouseEntity we = map.get(i);
            Map<String, String> tmpmap = new HashMap<>();
            tmpmap.put("lng", String.valueOf(we.getLongitude()));
            tmpmap.put("lat", String.valueOf(we.getLatitude()));
            we.setMarkerPoint(tmpmap);
        }
        page.getPageMap().remove("items");
        page.getPageMap().put("items", map);

        return Result.ok(page.getPageMap());
    }


    /**
     * 信息
     */
    @RequestMapping("/info/{id}")
    public Result info(@PathVariable("id") String id) {
        WarehouseEntity warehouse = warehouseService.getById(id);

        return Result.ok().put("warehouse", warehouse);
    }

    /**
     * 保存
     */
    @RequestMapping("/save")
    public Result save(@RequestBody WarehouseEntity warehouse) {
        String uuid = UUID.randomUUID().toString();
        warehouse.setId(uuid);
        warehouseService.save(warehouse);

        return Result.ok();
    }

    /**
     * 修改
     */
    @RequestMapping("/update")
    public Result update(@RequestBody WarehouseEntity warehouse) {
        warehouseService.updateById(warehouse);

        return Result.ok();
    }

    /**
     * 删除
     */
    @RequestMapping("/delete")
    public Result delete(String id) {
        warehouseService.removeById(id);

        return Result.ok();
    }

}
