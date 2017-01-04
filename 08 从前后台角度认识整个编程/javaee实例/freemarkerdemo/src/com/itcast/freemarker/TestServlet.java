package com.itcast.freemarker;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import freemarker.template.Configuration;
import freemarker.template.DefaultObjectWrapper;
import freemarker.template.Template;
import freemarker.template.TemplateException;

public class TestServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setCharacterEncoding("utf-8");
		Map<String, Object> root = new HashMap<String, Object>();
		//root.put("hello", "测试");
		List<String[]> list = new ArrayList<String[]>();
		String[] arr1 = {"./img/buy-logo.png","￥45","iphone6s手机壳/手机保护套/使用于苹果6/6s/6plusiphone6s"};  
		String[] arr2 = {"./img/buy-logo.png","￥46","iphone6s手机壳/手机保护套/使用于苹果6/6s/6plusiphone6s"}; 
		String[] arr3 = {"./img/buy-logo.png","￥47","iphone6s手机壳/手机保护套/使用于苹果6/6s/6plusiphone6s"}; 
		list.add(arr1);
		list.add(arr2);
		list.add(arr3);
		
//		List<String> list = new ArrayList<String>();
//		list.add("qqq");
//		list.add("www");
//		list.add("eee");
		root.put("data", list);
		PrintWriter out = response.getWriter();
		File file = new File("E:/eclipsespace/freemarkerdemo/src/templates");
		Configuration config=new Configuration();
		config.setDirectoryForTemplateLoading(file);
		config.setObjectWrapper(new DefaultObjectWrapper());
	    config.setDefaultEncoding("UTF-8");
	    Template template=config.getTemplate("user.ftl","UTF-8");
	    template.setEncoding("UTF-8");
	    try {
			template.process(root, out);
		} catch (TemplateException e) {
			e.printStackTrace();
		} finally{
		      out.flush();
		      out.close();
		}

	}
}
