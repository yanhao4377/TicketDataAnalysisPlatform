package com.xiaozu.dao;

import com.xiaozu.entity.Flight;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface FlightMapper {
    Flight test(@Param("FlightNumber") String FlightNumber, @Param("ItinerarDate") String ItinerarDate);
}
