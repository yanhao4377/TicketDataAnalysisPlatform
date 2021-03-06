<%--
  Created by IntelliJ IDEA.
  User: 25074
  Date: 2020/9/6
  Time: 14:34
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>数据可视化demo</title>
    <link href="styles/common.css" rel="stylesheet">
    <link href="styles/bootstrap.min.css" rel="stylesheet">
    <link href="styles/bootstrap-table.css" rel="stylesheet">
    <link href="styles/pagination.css" rel="stylesheet">
    <script src="scripts/Plugin/jquery-3.3.1.min.js"></script>
    <script src="scripts/Plugin/echarts.min.js"></script>
    <script src="scripts/Plugin/jquery.pagination.min.js"></script>
    <script src="scripts/common.js"></script>
    <script src="scripts/chronic.js"></script>
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
<!--内容部分-->
<div class="con left" style="width: 98%;margin-left: 1%;margin-bottom: 25px;">

    <input type="text" placeholder="请输入姓名身份证" style="width: 180px;height: 28px;border-radius: 3px;text-indent: 1em;border: 1px solid#4b8df8;color: #fff;" /><button class="btn btn-primary btn-sm" style="margin-left:20px"><span class="glyphicon glyphicon-search"></span>查询</button>

    <div class="div_any_child">
        <div class="table_p" style="height: 96%;margin-top: 20px;">
            <table>
                <thead><tr>
                    <th>序号</th>
                    <th>姓名</th>
                    <th>架次</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                <tr><td>1</td><td>萝卜1</td><td>东航0001</td><td><button class="btn btn-primary btn-sm">查看</button></td></tr>
                <tr><td>2</td><td>萝卜2</td><td>东航0001</td><td><button class="btn btn-primary btn-sm">查看</button></td></tr>
                <tr><td>3</td><td>萝卜3</td><td>东航0001</td><td><button class="btn btn-primary btn-sm">查看</button></td></tr>
                <tr><td>4</td><td>萝卜4</td><td>东航0001</td><td><button class="btn btn-primary btn-sm">查看</button></td></tr>
                <tr><td>5</td><td>萝卜5</td><td>东航0001</td><td><button class="btn btn-primary btn-sm">查看</button></td></tr>
                <tr><td>6</td><td>萝卜6</td><td>东航0001</td><td><button class="btn btn-primary btn-sm">查看</button></td></tr>
                <tr><td>7</td><td>萝卜7</td><td>东航0001</td><td><button class="btn btn-primary btn-sm">查看</button></td></tr>
                <tr><td>8</td><td>萝卜8</td><td>东航0001</td><td><button class="btn btn-primary btn-sm">查看</button></td></tr>
                <tr><td>9</td><td>萝卜9</td><td>东航0001</td><td><button class="btn btn-primary btn-sm">查看</button></td></tr>
                <tr><td>10</td><td>萝卜0</td><td>东航0001</td><td><button class="btn btn-primary btn-sm">查看</button></td></tr>
                </tbody>
            </table>
        </div>
        <div class="box">
            <div id="pagination" class="page fl"></div>
        </div>
    </div>


</div>
</div>
</body>
</html>

