package com.platform.service;


import com.platform.model.Issue;

public interface IssueService {

	public String addIssue(Issue i);
	public Issue updateIssue(Long id, Issue updatedIssue);
	public String deleteIssue(Long id);
}
