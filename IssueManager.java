package com.platform.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.platform.model.Issue;
import com.platform.repository.IssueRepository;

@Service
public class IssueManager implements IssueService {

	@Autowired
	IssueRepository IR;
	
	@Override
	public String addIssue(Issue i) {
		try {
			IR.save(i);
			return "new issue added...";
		} catch (Exception e) {
			return e.getMessage();
		}
	}
	
	@Override
	 public Issue updateIssue(Long id, Issue updatedIssue) {
	        Optional<Issue> existingIssueOptional = IR.findById(id);

	        if (existingIssueOptional.isPresent()) {
	            Issue existingIssue = existingIssueOptional.get();
	            existingIssue.setIname(updatedIssue.getIname());
	            existingIssue.setIdiscription(updatedIssue.getIdiscription());
	            existingIssue.setIdate(updatedIssue.getIdate());
	            existingIssue.setLinks(updatedIssue.getLinks());
	            existingIssue.setPostedby(updatedIssue.getPostedby());
	            existingIssue.setIdepartment(updatedIssue.getIdepartment());
	            existingIssue.setArea(updatedIssue.getArea());
	            existingIssue.setPincode(updatedIssue.getPincode());
	            existingIssue.setStatus(updatedIssue.getStatus());
	            return IR.save(existingIssue);
	        } else {
	            throw new RuntimeException("Issue not found with id: " + id);
	        }
	    }
	@Override
	 public String deleteIssue(Long id) {
	        if (IR.existsById(id)) {
	            IR.deleteById(id);
	            return id+" issue deleted successfully";
	        } else {
	            return "Issue not found with id: " + id;
	        }
	    }
}
