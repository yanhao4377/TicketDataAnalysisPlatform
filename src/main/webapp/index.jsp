<%--
  Created by IntelliJ IDEA.
  User: 25074
  Date: 2020/9/6
  Time: 14:18
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <title>数据可视化demo</title>
    <link href="styles/common.css" rel="stylesheet">
    <script src="scripts/Plugin/jquery-3.3.1.min.js"></script>
    <script src="scripts/Plugin/echarts.min.js"></script>
    <script src="http://api.map.baidu.com/api?v=2.0&ak=LelFSt6BfykGf8m3PB5zr8LaXAG2cMg6"></script>
    <script src="scripts/Plugin/bmap.min.js"></script>
    <script src="scripts/common.js"></script>
    <script src="scripts/index.js"></script>
    <script src="scripts/Plugin/laydate/laydate.js"></script>
</head>
<body>
<!--顶部-->
<header class="header left">
    <div class="left nav">
        <ul>
            <li class="nav_active"><i class="nav_1"></i><a href="index.html">采集概况</a> </li>
            <li><i class="nav_2"></i><a href="quota.html">航线模块</a> </li>
            <li><i class="nav_3"></i><a href="trend.html">城市模块</a> </li>
            <li><i class="nav_4"></i><a href="chronic1.html">航空公司模块</a> </li>
        </ul>
    </div>
    <div class="header_center left" style="position:relative">
        <h2><strong>机票分析综合数据平台</strong></h2>
        <p class="color_font"><small>Comprehensive data platform for air ticket analysis</small></p>
    </div>
    <div class="right nav text_right">
        <ul>

        </ul>
    </div>

</header>
<!--内容部分-->
<div class="con left">
    <!--数据总概-->
    <div class="con_div">
        <div class="con_div_text left">
            <div class="con_div_text01 left">
                <img src="../images/info_1.png" class="left text01_img"/>
                <div class="left text01_div">
                    <p>总采集数据量(G)</p>
                    <p>1235</p>
                </div>
            </div>
            <div class="con_div_text01 right">
                <img src="../images/info_2.png" class="left text01_img"/>
                <div class="left text01_div">
                    <p>当月采集数据量(G)</p>
                    <p>235</p>
                </div>
            </div>
        </div>
        <div class="con_div_text left">
            <div class="con_div_text01 left">
                <img src="../images/info_3.png" class="left text01_img"/>
                <div class="left text01_div">
                    <p>总门诊数(人)</p>
                    <p class="sky">12356</p>
                </div>
            </div>
            <div class="con_div_text01 right">
                <img src="../images/info_4.png" class="left text01_img"/>
                <div class="left text01_div">
                    <p>当月门诊数(人)</p>
                    <p class="sky">12356</p>
                </div>
            </div>
        </div>
        <div class="con_div_text left">

            <div class="con_div_text01 left">
                <img src="../images/info_5.png" class="left text01_img"/>
                <div class="left text01_div">
                    <p>总住院数(人)</p>
                    <p class="org">12356</p>
                </div>
            </div>
            <div class="con_div_text01 right">
                <img src="../images/info_6.png" class="left text01_img"/>
                <div class="left text01_div">
                    <p>当月住院数(人)</p>
                    <p class="org">12356</p>
                </div>
            </div>
        </div>
    </div>
    <!--统计分析图-->
    <div class="div_any">
        <div class="left div_any01">
            <div class="div_any_child">
                <div class="div_any_title"><img src="../images/title_1.png">各医院采集数据量</div>
                <p id="pieChart1" class="p_chart"></p>
            </div>
            <div class="div_any_child">
                <div class="div_any_title"><img src="../images/title_2.png">各医院门诊住院费用</div>
                <p id="histogramChart" class="p_chart"></p>
            </div>
        </div>
        <div class="div_any02 left ">
            <div class="div_any_child div_height">
                <div class="div_any_title any_title_width"><img src="../images/title_0.png">厦门市地图 </div>
                <div id="mapChart" style="width:97.5%;height:95%;display: inline-block;padding-left: 1.25%;padding-top:2.2%"></div>
            </div>
        </div>
        <div class="right div_any01">
            <div class="div_any_child">
                <div class="div_any_title"><img src="../images/title_3.png">数据采集条数(当日)</div>
                <p id="lineChart" class="p_chart"></p>
            </div>
            <div class="div_any_child">
                <div class="div_any_title"><img src="../images/title_4.png">就诊人数(当日)</div>
                <p id="lineChart2" class="p_chart"></p>
            </div>
        </div>
    </div>

    <div id="el-dialog" class="">
        <div class="xc_layer"></div>
        <div class="popBox" id="printView">
            <div class="ttBox"><span class="tt" id="reportTitle">第一医院</span><img src="../images/close.png" style="width: 30px;float: right;cursor: pointer;" title="关闭弹窗" class="close"/></div>
            <div class="txtBox" id="el-dialog_body">
                <div style="height:100%;width: 98%;margin-left: 1%;">
                    <div class="left div_any01" style="width: 64%;">
                        <div class="div_any_child">
                            <div class="div_any_title"><div type="text" class="demo-input" id="date1" style="display: inline-block;cursor: pointer;margin-right: 16px;"></div><img src="../images/title_4.png">门诊住院人次</div>
                            <p id="lineChart3" class="p_chart"></p>
                        </div>
                        <div class="div_any_child">
                            <div class="div_any_title"><div type="text" class="demo-input" id="date2" style="display: inline-block;cursor: pointer;margin-right: 16px;"></div><img src="../images/title_7.png">医疗费用</div>
                            <p id="lineChart4" class="p_chart"></p>
                        </div>
                    </div>
                    <div class="left div_any01"  style="width: 32%;">
                        <div class="div_any_child">
                            <div class="div_any_title"><div type="text" class="demo-input" id="date3" style="display: inline-block;cursor: pointer;margin-right: 16px;"></div><img src="../images/title_18.png">病人年龄段分布</div>
                            <p id="pieChart2" class="p_chart"></p>
                        </div>
                        <div class="div_any_child">
                            <div class="div_any_title"><div type="text" class="demo-input" id="date4" style="display: inline-block;cursor: pointer;margin-right: 16px;"></div><img src="../images/title_20.png">医疗费用组成</div>
                            <p id="pieChart3" class="p_chart"></p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

</div>
</body>
</html>

