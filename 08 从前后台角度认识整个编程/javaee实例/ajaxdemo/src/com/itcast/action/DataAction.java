package com.itcast.action;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class DataAction extends HttpServlet {

	private static final long serialVersionUID = 1L;

	@Override
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/json; charset=UTF-8");  
		PrintWriter out = response.getWriter();
		
		String str = JsonUtils.jsonText();
		System.out.println(str);
		String s = JsonUtils.beanJson();
		System.out.println(s);
		out.write(s);
	}

	
	//service 用来分发 doGet和doPost方法
	
	
	
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//		response.setContentType("text/html;charset=UTF-8");
//		PrintWriter out = response.getWriter();
//		try {
//			out.println("<html>");
//            out.println("<head>");
//            out.println("<title>MyFirstServlet</title>");
//            out.println("</head>");
//            out.println("<body>");
//            out.println("<h2>Servlet MyFirstServlet at " + request.getContextPath() + "</h2>");
//            out.println("</body>");
//            out.println("</html>");
//		} catch (Exception e) {
//			e.printStackTrace();
//		} finally{
//			out.close();
//		}
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		// response.setContentType("text/html");
		// PrintWriter out = response.getWriter();
		// out.println("<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01
		// Transitional//EN\">");
		// out.println("<HTML>");
		// out.println(" <HEAD><TITLE>A Servlet</TITLE></HEAD>");
		// out.println(" <BODY>");
		// out.print(" This is ");
		// out.print(this.getClass());
		// out.println(", using the POST method");
		// out.println(" </BODY>");
		// out.println("</HTML>");
		// out.flush();
		// out.close();
	}

}
