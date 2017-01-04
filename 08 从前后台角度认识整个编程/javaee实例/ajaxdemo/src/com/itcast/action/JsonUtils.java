package com.itcast.action;

import java.util.ArrayList;
import java.util.List;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

public class JsonUtils {

	public static String jsonText(){
		JSONObject json=new JSONObject();  
	    JSONArray jsonMembers = new JSONArray();  
	    JSONObject member1 = new JSONObject();  
	    member1.put("loginname", "zhangfan");  
	    member1.put("password", "userpass");  
	    member1.put("email","10371443@qq.com");  
	    member1.put("sign_date", "2007-06-12");  
	    jsonMembers.add(member1);  
	  
	    JSONObject member2 = new JSONObject();  
	    member2.put("loginname", "zf");  
	    member2.put("password", "userpass");  
	    member2.put("email","8223939@qq.com");  
	    member2.put("sign_date", "2008-07-16");  
	    jsonMembers.add(member2);  
	    json.put("users", jsonMembers);  
	  
	    return json.toString(); 
	}
	
	public static String beanJson(){
		List<Person> list = new ArrayList<Person>();
		Person p1 = new Person();
		p1.setId(123);
		p1.setUserName("张三");
		p1.setAge(25);
		p1.setPassword("123");
		list.add(p1);
		Person p2 = new Person();
		p2.setId(456);
		p2.setUserName("李四");
		p2.setAge(27);
		p2.setPassword("456");
		list.add(p2);
		JSONArray jsonarray = JSONArray.fromObject(list);  
		return jsonarray.toString();
	}
}
