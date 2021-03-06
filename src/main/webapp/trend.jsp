<%--
  Created by IntelliJ IDEA.
  User: 25074
  Date: 2020/9/6
  Time: 14:22
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <title>数据可视化demo</title>
    <link href="styles/common.css" rel="stylesheet">
    <script src="scripts/Plugin/jquery-3.3.1.min.js"></script>
    <script src="scripts/Plugin/echarts.min.js"></script>
    <script src="scripts/common.js"></script>
    <script src="scripts/trend.js"></script>
</head>
<body>
<!--顶部-->
<header class="header left">
    <div class="left nav">
        <ul>
            <li class="nav_active"><i class="nav_1"></i><a href="index.html">采集概况</a> </li>
            <li><i class="nav_2"></i><a href="quota.jsp">航线模块</a> </li>
            <li><i class="nav_3"></i><a href="trend.jsp">城市模块</a> </li>
            <li><i class="nav_4"></i><a href="chronic1.jsp">航空公司模块</a> </li>
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

<a href="hh"><h1>点这</h1></a>
<!--内容部分-->
<div class="con left" style="width:50%;">
    <!--统计分析图-->
    <div class="div_any">
        <div class="left div_any01" style="width:100%;">
            <div class="div_any_child" style="width:98%;position:relative;height: 420px;">
                <div class="div_any_title"><img src="../images/title_13.png">吞吐量</div>
                <div id="histogramChart1"  style="width: 45%;display: inline-block;height: 400px;margin-top: 15px;"></div>
                <div id="lineChart1"  style="width: 52%;height: 66%;display: inline-block;"></div>
                <div style="width: 50%;height: 20%;display: inline-block;color:red;position: absolute;right: 2%;top: 8%;">
                    <div style="display: inline-block;width:33%;text-align:center;">
                        <div style="color:#fff;font-size: 18px;line-height: 32px;">吞吐量</div>
                        <div style="color:#87cefa;font-size: 30px;line-height: 42px;">2354</div>
                    </div><div style="display: inline-block;width:33%;text-align:center;">
                    <div style="color:#fff;font-size: 18px;line-height: 32px;">增长率</div>
                    <div style="color:red;font-size: 30px;line-height: 42px;">26%</div>
                </div><div style="display: inline-block;width:33%;text-align:center;">
                    <div style="color:#fff;font-size: 18px;line-height: 32px;">占比</div>
                    <div style="color:#ff7f50;font-size: 30px;line-height: 42px;">5.36%</div>
                </div>
                </div>
            </div>
        </div>
        <div class="left div_any01" style="width:48%;">
            <div class="div_any_child" style="height: 420px;">
                <div class="div_any_title"><img src="../images/title_14.png">热门航线排行</div>
                <p id="histogramChart2" class="p_chart" style="height: 400px;"></p>

            </div>
        </div>
    </div>
</div>
<div class="con right" style="width:50%;">
    <div class="div_any">
        <div class="left div_any01" style="width:100%;">
            <div class="div_any_child" style="width:98%;position:relative;height: 420px;">
                <div class="div_any_title"><img src="../images/title_17.png">热门城市排行</div>
                <div id="histogramChart3"  style="width: 45%;display: inline-block;height: 400px;margin-top: 15px;"></div>
            </div>
        </div>
        <div class="left div_any01" style="width:48%;">
            <div class="div_any_child" style="height: 420px;">
                <div class="div_any_title"><img src="../images/title_18.png">业务占比</div>
                <p id="pieChart1" class="p_chart" style="height: 400px;"></p>
            </div>
        </div>
    </div>
</div>
</body>
</html>
