package com.platform.service;

import com.platform.model.User;

public interface UserService {

	public String signup(User u);
	public String login(String username,String password);
}