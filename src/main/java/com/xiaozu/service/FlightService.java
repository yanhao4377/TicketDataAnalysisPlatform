package com.xiaozu.service;

import com.xiaozu.dao.FlightMapper;
import com.xiaozu.entity.Flight;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.text.SimpleDateFormat;

@Service
@Transactional
public class FlightService {
    @Autowired
    private FlightMapper flightMapper;
    @Transactional()
    public void test(){
        SimpleDateFormat sdf=new SimpleDateFormat("yyyy-mm-dd");
        String date="2020-09-11";
        Flight f = flightMapper.test("CA1201",date);
        System.out.println(f);
    }

}
