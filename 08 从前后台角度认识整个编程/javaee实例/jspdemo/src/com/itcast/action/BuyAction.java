package com.itcast.action;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class BuyAction extends HttpServlet {

	private static final long serialVersionUID = 1L;

	@Override
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		List<String[]> list = new ArrayList<String[]>();
		String[] arr1 = {"./img/buy-logo.png","￥45","iphone6s手机壳/手机保护套/使用于苹果6/6s/6plusiphone6s"};  
		String[] arr2 = {"./img/buy-logo.png","￥46","iphone6s手机壳/手机保护套/使用于苹果6/6s/6plusiphone6s"}; 
		String[] arr3 = {"./img/buy-logo.png","￥47","iphone6s手机壳/手机保护套/使用于苹果6/6s/6plusiphone6s"}; 
		list.add(arr1);
		list.add(arr2);
		list.add(arr3);
		request.setAttribute("data", list);
		request.getRequestDispatcher("index.jsp").forward(request, response);
	}

}
