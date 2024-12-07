package com.platform.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.platform.model.User;
import com.platform.repository.UserRepository;

@Service
public class UserManager implements UserService{

	@Autowired
	UserRepository UR;
	
	@Override
	public String signup(User U)
	{
		try {
			if(UR.validateUser(U.username)>0)
					throw new Exception("Username already exists..");
			UR.save(U);
			return "New User has been added..";
		} catch (Exception e) {
			return e.getMessage();
		}
		
	}
	
	@Override
	public String login(String username,String password)
	{
		try {
			
			if(UR.validateLogin(username, password)==1)
			{
				return "1";
			}
			else
			{
				throw new Exception("401 not found"+username);
			}
		} catch (Exception e) {
			return e.getMessage();
		}
	}

}
