package com.jspiders.contact_manager.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jspiders.contact_manager.repository.ContactRepository;

@Service
public class ContactService {
	
	@Autowired
	private ContactRepository repository;
}
