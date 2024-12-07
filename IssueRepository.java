package com.platform.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.platform.model.Issue;

public interface IssueRepository extends JpaRepository<Issue, Long>{

}
