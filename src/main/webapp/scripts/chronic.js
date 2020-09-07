$(function(){
  var Theight = $(window).height() - 260;
  $(".div_any_child").height(Theight);
  totalPage = 10;
  currentPage = 1;
  paging(totalPage,currentPage);
  init();
})
function init() {
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
  var histogramChart4 = echarts.init(document.getElementById('histogramChart4'));
  histogramChart4.setOption( {

    color:['#fab387'],
    grid:{
      left: '5%',
      right: '5%',
      bottom: '5%',
      containLabel: true
    },
    tooltip : {
      trigger: 'item',
      formatter: "{a}<br/>{b}<br/>{c}"
    },
    calculable : true,
    xAxis : [
      {
        type : 'category',
        data : ['东方航空', '四川航空', '中国国航', '南方航空',],
        axisLine:{
          lineStyle:{
            color: '#fab387'
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
            color: '#fab387'
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
            return value
          },
        },
      }
    ],
    series : [
      {
        name:'总航班数对比',
        type:'bar',
        barWidth:30,
        data:[20,27,23,17],
      },
    ]
  });

}