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


<h1>Total Amount</h1>
<table style="width:25%">
<tr>
    <th>ID</th>
    <th>Name</th>
    <th>Protein</th>
    <th>Carbs</th>
    <th>Fat</th>
    
  </tr>

<c:forEach items="${users}" var="User">
	
  <tr>
    <td>${User.id}</td>
    <td>${User.name}</td>
    <td>${User.protein}</td>
    <td>${User.carbs}</td>
    <td>${User.fat}</td>
  </tr>
</c:forEach>
<tr>
  <th>Total</th>
  <td>${total}</td>
</tr>

</table>


</body>
</html>