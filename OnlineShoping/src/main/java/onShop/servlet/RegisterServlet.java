package onShop.servlet;

import java.io.IOException;


import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/RegisterServlet")
public class RegisterServlet extends HttpServlet {
	

	private static final long serialVersionUID = 1L;
	private static final String INSERT_QUERY = "insert into users(name,email,password) values(?,?,?)";
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		PrintWriter pw = res.getWriter();
		res.setContentType("text/html");
		String name = req.getParameter("firstName");
        String email = req.getParameter("email");
        String password = req.getParameter("password");
        
        try {
			Class.forName("com.mysql.jdbc.Driver");
		} catch (ClassNotFoundException e) {
		
			e.printStackTrace();
		}
        
        try(Connection con = DriverManager.getConnection("jdbc:mysql:///onlineshop","root","Gr347D4n");
        		PreparedStatement ps = con.prepareStatement(INSERT_QUERY);) 
         {
        	ps.setString(1, name);
        	ps.setString(2, email);
        	ps.setString(3, password);
        	
        	int count = ps.executeUpdate();
        	if(count==0) {
        		pw.println("Record not stored into database");
        	}
        	else {
        		res.sendRedirect("index.jsp");
        	}
         } catch (SQLException e) {
			
			e.printStackTrace();
		}
        pw.close();
	}


}
