package com.platform.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.platform.model.Politican;
import com.platform.service.PoliticianService;

@RestController
@RequestMapping("/politician")
public class PoliticianController {
	@Autowired
	PoliticianService PM;
	
	@PostMapping("/signup")
	public String addPolitician(@RequestBody Politican p)
	{
		return PM.addPolitician(p);
	}
	
	@GetMapping("/login/{un}/{pwd}")
	public String checkLogin(@PathVariable("un") String username,@PathVariable("pwd") String password)
	{
		return PM.login(username,password);
	}
}
