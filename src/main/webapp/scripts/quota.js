
$(function(){

  init();

})
function init() {


    var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6'];



    var pieChart1 = echarts.init(document.getElementById('pieChart1'));
    pieChart1.setOption({
        color:["#87cefa","#ff7f50","#32cd32","#da70d6",],
        tooltip : {
            trigger: 'item',
            formatter: "{a}<br/>{b}<br/>{c}架次"
        },
        calculable : true,
        series : [
            {
                name:'业务量',
                type:'pie',
                radius : [30, 110],
                center : ['50%', '50%'],
                roseType : 'area',
                x: '50%',
                max: 40,
                sort : 'ascending',
                data:[
                    {value:10, name:'业务1'},
                    {value:5, name:'业务2'},
                    {value:15, name:'业务3'},
                    {value:25, name:'业务4'},
                ]
            }
        ]
    })

    //医疗费用
    var lineChart1 = echarts.init(document.getElementById('lineChart1'));
    lineChart1.setOption({
        color: ["#87cefa", "#ff7f50", "#32cd32", "#da70d6",],
        tooltip: {
            trigger: 'item',
            formatter: "{a}<br/>{b}<br/>{c}元"
        },
        legend: {
            data: ["东方航空", '四川航空', '中国国航', '南方航空',],
            y: 'bottom',
            x: 'center',
            textStyle: {
                color: '#fff',
                fontSize: 12
            }
        },
        grid: {
            left: '5%',
            right: '5%',
            bottom: '10%',
            containLabel: true
        },
        calculable: true,
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                axisLine: {
                    lineStyle: {
                        color: '#87cefa'
                    },
                },
                axisLabel: {
                    interval: 0,
                    rotate: 40,

                    textStyle: {
                        color: '#fff',
                        fontSize: 13
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: '#87cefa'
                    },
                },
                splitLine: {
                    "show": false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    },
                    formatter: function (value) {
                        return value + "元"
                    },
                },
            }
        ],
        series: [
            {
                name: '东方航空',
                type: 'line',
                smooth: true,
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data: [10, 12, 21, 54, 260, 830, 710]
            },
            {
                name: '四川航空',
                type: 'line',
                smooth: true,
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data: [30, 182, 434, 791, 390, 30, 10]
            },
            {
                name: '中国国航',
                type: 'line',
                smooth: true,
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data: [1320, 1132, 601, 234, 120, 90, 20]
            },
            {
                name: '南方航空',
                type: 'line',
                smooth: true,
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data: [320, 132, 61, 34, 20, 9, 2]
            }
        ]

    })

    //药占比
    var histogramChart3 = echarts.init(document.getElementById('histogramChart3'));
    histogramChart3.setOption( {

        color:['#87cefa'],
        grid:{
            left: '5%',
            right: '5%',
            bottom: '5%',
            containLabel: true
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a}<br/>{b}<br/>{c}%"
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                data : ['东方航空', '四川航空', '中国国航', '南方航空',],
                axisLine:{
                    lineStyle:{
                        color: '#87cefa'
                    },
                },
                axisLabel : {
                    interval:0,
                    rotate:40,

                    textStyle: {
                        color: '#fff',
                        fontSize:13
                    }
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLine:{
                    lineStyle:{
                        color: '#87cefa'
                    },
                },
                splitLine: {
                    "show": false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    },
                    formatter: function (value) {
                        return value + "%"
                    },
                },
            }
        ],
        series : [
            {
                name:'准点率',
                type:'bar',
                barWidth:30,
                data:[60,80,70,50],
            },
        ]
    });

    //平均住院天数
    var histogramChart4 = echarts.init(document.getElementById('histogramChart4'));
    histogramChart4.setOption( {
        color:['#87cefa'],
        grid:{
            left: '5%',
            right: '5%',
            bottom: '5%',
            containLabel: true
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a}<br/>{b}<br/>{c}天"
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                data : ['厦门第一医院','厦门中山医院','厦门中医院','厦门第五医院',],
                axisLine:{
                    lineStyle:{
                        color: '#87cefa'
                    },
                },
                axisLabel : {
                    interval:0,
                    rotate:40,

                    textStyle: {
                        color: '#fff',
                        fontSize:13
                    }
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLine:{
                    lineStyle:{
                        color: '#87cefa'
                    },
                },
                splitLine: {
                    "show": false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    },
                    formatter: function (value) {
                        return value + "天"
                    },
                },
            }
        ],
        series : [
            {
                name:'平均住院天数',
                type:'bar',
                barWidth:30,
                data:[6,8,7,5],
            },
        ]
    });
}
function searchRoute(){
    url = "Route/searchRoute"
    $.ajax({
        url: "Route/searchRoute",
        data: {start: '北京', end: '上海'},
        dataType: 'json',
    })

}