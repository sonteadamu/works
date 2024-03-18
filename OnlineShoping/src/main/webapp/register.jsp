<%@page import="onShop.model.*" %>
<% 
    User auth = (User) request.getSession().getAttribute("auth"); 
       if(auth != null){
       response.sendRedirect("index.jsp");
       }%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="ISO-8859-1">
    <title>Registration</title>

  <%@include file="/Common-Components/head.jsp"%>  
</head>
<body>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
<div class="container">
  <a class="navbar-brand" href="index.jsp">OUR-SHOP</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link" href="index.jsp">Home </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="cart.jsp">Cart <span class="badge badge-danger">${ cart_list.size() }</span></a>
      </li>
      <% if(auth != null){%>
      
    	  <li class="nav-item">
          <a class="nav-link" href="order.jsp">Orders</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="log-out">Log-out</a>
        </li>
      <%}else { %>
    	  <li class="nav-item">
          <a class="nav-link" href="login.jsp">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="register.jsp">Register</a>
        </li>
     <% }%>
      
    </ul>
    
  </div>
</div>
</nav> 

<div class="container">
		<div class="card w-50 mx-auto my-5">
			<div class="card-header text-center">User Register</div>
			<div class="card-body">
				<form action="RegisterServlet" method="post">
				<input type="hidden" name="action" value="create">
					<div class="form-group">
	                    <label for="firstName">Name</label>
	                    <input type="text" class="form-control" id="firstName" name="firstName" required>
               		</div>
					<div class="form-group">
	                    <label for="firstName">Email</label>
	                    <input type="email" class="form-control" id="firstName" name="email" required>
                    </div>
					<div class="form-group">
                    	<label for="password">Password</label>
                    	<input type="password" class="form-control" id="password" name="password" required>
                    </div>
                
                <button type="submit" class="btn btn-secondary">Submit</button>
				</form>
			</div>
		</div>
	</div>
<%@include file="/Common-Components/footer.jsp"%>
</body>
</html>
