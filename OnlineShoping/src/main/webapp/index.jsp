<%@page import="onShop.connection.DbCon"%>
<%@page import="onShop.dao.ProductDao"%>
<%@page import="onShop.model.*"%>
<%@page import="java.util.*"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>

			<%
			User auth = (User) request.getSession().getAttribute("auth");
			if (auth != null) {
			    request.setAttribute("person", auth);
			}
			ProductDao pd = new ProductDao(DbCon.getConnection());
			List<Product> products = pd.getAllProducts();
			ArrayList<Cart> cart_list = (ArrayList<Cart>) session.getAttribute("cart-list");
			if (cart_list != null) {
				request.setAttribute("cart_list", cart_list);
			}
			%>
<!DOCTYPE html>
<html>
<head>
<%@include file="/Common-Components/head.jsp"%>
<title>Our-Shop Home</title>
</head>
<body>
	<%@include file="/Common-Components/navbar.jsp"%>

	<div class="container">
		<div class="card-header my-3">All Products</div>
		<div class="row">
			<%
			if (!products.isEmpty()) {
				for (Product p : products) {
			%>
			<div class="col-md-3 my-3">
				<div class="card w-100">
					<img class="card-img-top" src="product-images/<%=p.getImage() %>"
						alt="Card image cap">
					<div class="card-body">
						<h5 class="card-title"><%=p.getName() %></h5>
						<h6 class="price">Price: <%=p.getPrice() %> Birr</h6>
						<h6 class="category">Category: <%=p.getCategory() %></h6>
						<div class="mt-3 d-flex justify-content-between">
							<a class="btn btn-dark ml-5" href="add-to-cart?id=<%=p.getId()%>">Add to Cart</a>
								
						</div>
					</div>
				</div>
			</div>
			<%
			}
			} else {
			out.println("There is no proucts");
			}
			%>

		</div>
	</div>

	<%@include file="/Common-Components/footer.jsp"%>
</body>
</html>