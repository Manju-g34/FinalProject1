package com.platform.service;

import com.platform.model.Politican;

public interface PoliticianService {
	public String addPolitician(Politican p);
	public String login(String username,String password);
}
