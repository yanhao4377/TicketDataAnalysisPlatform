package com.xiaozu.controller;

import com.xiaozu.entity.Dog;
import com.xiaozu.entity.Flight;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;

@Controller
@RequestMapping
public class FlightController {
        @RequestMapping("hh")
        String test(HttpServletRequest request){
            request.setAttribute("test","东方航空");
            return "quota";
        }

        @RequestMapping("Route/searchRoute")
        @ResponseBody
        Dog searchRoute(@RequestParam("start") String start, @RequestParam("end") String end){
            System.out.println(start+"  "+end);
            Dog dog = new Dog("cathie",3);
            return dog;
        }
}
