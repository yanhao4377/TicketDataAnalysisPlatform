package com.xiaozu.controller;

import com.xiaozu.entity.Dog;
import com.xiaozu.entity.Flight;
import com.xiaozu.service.FlightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;

@Controller
@RequestMapping
public class FlightController {
        @Autowired
        private FlightService flightService;

        @RequestMapping("hh")
        String test(HttpServletRequest request){
            request.setAttribute("test","东方航空");
            return "quota";
        }

        @RequestMapping("Route/searchRoute")
        @ResponseBody
        ArrayList<Flight> searchRoute(@RequestParam("start") String start, @RequestParam("end") String end){
            ArrayList<Flight> flights = flightService.selectBySaE(start, end);
            return  flights;
        }
}
