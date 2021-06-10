<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
<link rel="stylesheet" type="text/css" href="/webjars/bootstrap/css/bootstrap.min.css"/>
    <script type="text/javascript" src="/webjars/jquery/jquery.min.js"></script>
    <script type="text/javascript" src="/webjars/bootstrap/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="/webjars/font-awesome/css/font-awesome.min.css"></link>
</head>
<body>


<h1>Total Amounts page</h1>
<table style="width:25%">
<tr>
    <th>Name </th>
    <th>Amount </th>
    <th>ID</th>
  </tr>

<c:forEach items="${users}" var="user">
	
  <tr>
    <td>${user.name}</td>
    <td>${user.amount}</td>
    <td>${user.id}</td>
  </tr>
</c:forEach>
</table>


</body>
</html>