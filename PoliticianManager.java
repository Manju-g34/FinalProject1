package com.platform.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.platform.model.Politican;
import com.platform.repository.PoliticianRepository;

@Service
public class PoliticianManager implements PoliticianService {

	@Autowired
	PoliticianRepository PR;
	
	@Override
	public String addPolitician(Politican p) {
		try {
			if(PR.validateUser(p.username)>0)
					throw new Exception("Username already exists..");
			PR.save(p);
			return "New politician has been added..";
		} catch (Exception e) {
			return e.getMessage();
		}
	}
	
	@Override
	public String login(String username,String password)
	{
		try {
			
			if(PR.validateLogin(username, password)==1)
			{
				return "login successfull";
			}
			else
			{
				throw new Exception("401 not found");
			}
		} catch (Exception e) {
			return e.getMessage();
		}
	}

}
