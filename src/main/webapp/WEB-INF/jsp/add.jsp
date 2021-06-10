<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<html>
<head>
<link rel="stylesheet" type="text/css" href="/webjars/bootstrap/css/bootstrap.min.css"/>
    <script type="text/javascript" src="/webjars/jquery/jquery.min.js"></script>
    <script type="text/javascript" src="/webjars/bootstrap/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="/webjars/font-awesome/css/font-awesome.min.css"></link>
    </head>
<body>
    <h1>Add Calorie Information/h1>
        
    <form:form modelAttribute="form" class="form-row">
        <form:errors path="" element="div" />
        <div class="form-group col-md-4">
          <form:label path="id">ID Number: </form:label>
            <form:input path="id" type="number" class="form-control" id="exampleInputEmail1"/>
            <form:errors path="id" />
            <form:label path="name">Name: </form:label>
            <form:input path="name" type="text" class="form-control" id="exampleInputEmail1" />
            <form:errors path="name" />
            <form:label path="protein">Protein: </form:label>
            <form:input path="protein" type="text" class="form-control" id="exampleInputEmail1"/>
            <form:errors path="protein" />
            <form:label path="carbs">Carbs: </form:label>
            <form:input path="carbs" type="text" class="form-control" id="exampleInputEmail1"/>
            <form:errors path="carbs" />
            <form:label path="fat">Fat: </form:label>
            <form:input path="fat" type="text" class="form-control" id="exampleInputEmail1"/>
            <form:errors path="fat" />
        	<br>
            <input type="submit" class="btn btn-primary"/>
        </div>
    </form:form>
    


</body>
</html>
