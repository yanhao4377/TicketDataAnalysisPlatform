var symptomName = last_year_month();


$(function(){


  init();

})

 function init(){

   var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6'];



   //主要传染病
   var histogramChart1 = echarts.init(document.getElementById('histogramChart1'));
   histogramChart1.setOption({

     color:['#5bc0de'],
     grid:{
         left: '5%',
         right: '5%',
         bottom: '5%',
         containLabel: true
     },
     tooltip : {
        trigger: 'item',
        formatter: "{a}<br/>{b}<br/>{c}人"
    },
     calculable : true,
     xAxis : [
         {
             type : 'category',
             data : ['北京','上海','深圳','厦门','西安','南京','合肥','曲阜','宁夏'],
             axisLine:{
                  lineStyle:{
                      color: '#5bc0de'
                  },
              },
              axisLabel : {
                interval:0,
                rotate:40,
                  textStyle: {
                      color: '#fff'
                  }
              }
         }
     ],
     yAxis : [
         {
             type : 'value',
             axisLine:{
                 lineStyle:{
                     color: '#5bc0de'
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
                     return value + ""
                 },
             },
         }
     ],
     series : [
         {
             name:'城市',
             type:'bar',
             barWidth : 20,
             data:[2210,1085,926,669,634,452,412,312,156],
         },
     ]
   })

   //主要症状
   var histogramChart2 = echarts.init(document.getElementById('histogramChart2'));
   histogramChart2.setOption({

     color:['#FD6C88'],
     grid:{
         left: '5%',
         right: '5%',
         bottom: '10%',
         containLabel: true
     },
     tooltip : {
        trigger: 'item',
        formatter: "{a}<br/>{b}<br/>{c}人"
    },
     calculable : true,
     yAxis : [
         {
             type : 'category',
             data : ['北京-上海','西安-北京','西安-大连','上海-深圳','上海-合肥','石家庄-呼和浩特','西安-天津','福州-珠海'],
             axisLine:{
                  lineStyle:{
                      color: '#FD6C88'
                  },
              },
              axisLabel : {
                  textStyle: {
                      color: '#fff'
                  }
              }
         }
     ],
     xAxis : [
         {
             type : 'value',
             axisLine:{
                 lineStyle:{
                     color: '#FD6C88'
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
                     return value + ""
                 },
             },
         }
     ],
     series : [
         {
             name:'航线',
             type:'bar',
             barWidth : 20,
             data:[1750,1416,1136,819,704,413,251,175],
         },
     ]
   })

   //传染病发病趋势
   var lineChart1 = echarts.init(document.getElementById('lineChart1'));
   lineChart1.setOption({
     title: {
        text: '吞吐量趋势',
        textStyle:{
           fontSize:16,
           color:'#ff7f50'
       },
    },
     color:["#ff7f50"],
     grid:{
         left: '15%',
         right: '5%',
         bottom: '15%',

     },
     tooltip : {
          trigger: 'item',
          formatter: "{a}<br/>{b}<br/>{c}人"
      },

     calculable : true,
         yAxis: [
             {
                 type: 'value',
                 axisLine:{
                     lineStyle:{
                         color: '#ff7f50'
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
                         return value + ""
                     },
                 },
             }
         ],
         xAxis: [
             {
                 type: 'category',
                 data : symptomName,
                 boundaryGap : false,
                 axisLine:{
                     lineStyle:{
                         color: '#ff7f50'
                     },
                 },
                 splitLine: {
                     "show": false
                 },
                 axisLabel: {
                   // interval:0,
                   // rotate:40,
                     textStyle: {
                         color: '#fff'
                     },
                     formatter: function (value) {
                         return value + ""
                     },
                 },
             }
         ],
     series : [
         {
             name:'吞吐量',
             type:'line',
             smooth:true,
             itemStyle: {normal: {areaStyle: {type: 'default'}}},
             data:[120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90]
         },
     ]

   })

   //主要城市排行
   var histogramChart3 = echarts.init(document.getElementById('histogramChart3'));
   histogramChart3.setOption({

     grid: {
         top: '12%',
         left: '30%'
     },
      xAxis: {
          show: false
      },
      yAxis: [{
          show: true,
          data:  ['北京','上海','深圳','厦门','西安','南京','合肥','曲阜','宁夏'],
          inverse: true,
          axisLine: {
              show: false
          },
          splitLine: {
              show: false
          },
          axisTick: {
              show: false
          },
          axisLabel: {
              color: '#fff',
              formatter: (value, index) => {
                  return [

                      `{lg|${index+1}}  ` + '{title|' + value + '} '
                  ].join('\n\n')
              },
              rich: {
                  lg: {
                      backgroundColor: '#339911',
                      color: '#fff',
                      borderRadius: 15,
                      // padding: 5,
                      align: 'center',
                      width: 15,
                      height: 15
                  },
              }
          },


      }, {
          show: true,
          inverse: true,
          data: [2000, 1800, 1200, 1100,900,900,800,700],
          axisLabel: {
              textStyle: {
                  fontSize: 12,
                  color: '#fff',
              },
          },
          axisLine: {
              show: false
          },
          splitLine: {
              show: false
          },
          axisTick: {
              show: false
          },

      }],
      series: [{
          name: '条',
          type: 'bar',
          yAxisIndex: 0,
          data: [20,18,12,11,9,9,8,7],
          barWidth: 10,
          itemStyle: {
              normal: {
                  barBorderRadius: 20,
                  color: function(params) {
                      var num = myColor.length;
                      return myColor[params.dataIndex % num]
                  },
              }
          },
          label: {
              normal: {
                  show: true,
                  position: 'inside',
                  formatter: '{c}%'
              }
          },
      }, {
          name: '框',
          type: 'bar',
          yAxisIndex: 1,
          barGap: '-100%',
          data: [100, 100, 100, 100,100, 100, 100, 100],
          barWidth: 15,
          itemStyle: {
              normal: {
                  color: 'none',
                  borderColor: '#00c1de',
                  borderWidth: 1,
                  barBorderRadius: 15,
              }
          }
      }, ]
   })

   //业务占比
   var pieChart1 = echarts.init(document.getElementById('pieChart1'));
   pieChart1.setOption({
     color:["#32cd32","#ff7f50","#87cefa","#FD6C88","#4b5cc4","#faff72"],
     tooltip : {
      trigger: 'item',
      formatter: "{a}<br/>{b}<br/>{c}人"
     },
     calculable : true,
     series : [
         {
             name:'业务占比',
             type:'pie',
             radius : [30, 110],
             center : ['50%', '50%'],
             roseType : 'area',
             x: '50%',
        


             sort : 'ascending',
             data:[
                 {value:10, name:'业务1'},
                 {value:5, name:'业务2'},
                 {value:15, name:'业务3'},
                 {value:25, name:'业务4'},
                 {value:125, name:'业务5'},
                 {value:175, name:'业务6'},
             ]
         }
     ]
   })
 }
