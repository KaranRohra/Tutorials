package com.example.demo;

import org.springframework.context.support.ClassPathXmlApplicationContext;

public class DemoApplication {

	public static void main(String[] args) {
		ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("config.xml");
		try (context) {
			User user = (User) context.getBean("setter-injection");
			// User user = (User) context.getBean("constructor-injection");
			// User user = (User) context.getBean("object-injection");
			System.out.println(user);
		}
	}

}
