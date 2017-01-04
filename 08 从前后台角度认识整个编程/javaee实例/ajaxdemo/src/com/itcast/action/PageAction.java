package com.itcast.action;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class PageAction extends HttpServlet{

	private static final long serialVersionUID = 1L;

	@Override
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html;charset=UTF-8");
		PrintWriter out = response.getWriter();
		String str = JsonUtils.jsonText();
		System.out.println(str);
		String s = JsonUtils.beanJson();
		System.out.println(s);
		try {
			out.println("<html>");
            out.println("<head>");
            out.println("<title>我的主页</title>");
            out.println("</head>");
            out.println("<body>");
            out.println("<h2>站点跟目录：" + request.getContextPath() + "</h2>");
            out.println("</body>");
            out.println("</html>");
		} catch (Exception e) {
			e.printStackTrace();
		} finally{
			out.close();
		}
	}
	
	

	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	}
	
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	}
}
