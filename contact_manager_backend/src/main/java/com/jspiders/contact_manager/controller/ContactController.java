package com.jspiders.contact_manager.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jspiders.contact_manager.pojo.Contact;
import com.jspiders.contact_manager.repository.ContactRepository;
import com.jspiders.springboot.exception.ResourceNotFoundException;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/contacts")
public class ContactController {
	
	@Autowired
	private ContactRepository contactRepository;
	
	@GetMapping
	private List<Contact> getAllContacts(){
		return contactRepository.findAll();
	}
	
	@PostMapping
	private Contact createContact(@RequestBody Contact contact) {
		return contactRepository.save(contact);
	}
	
	@GetMapping("{id}")
	public ResponseEntity<Contact> getContact(@PathVariable int id) {
		Contact contact = contactRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Contact does not exists:" + id));
		return ResponseEntity.ok(contact);
	}
	
	@PutMapping("{id}")
	public ResponseEntity<Contact> updateEmployee(@PathVariable int id, @RequestBody Contact contactDetailes){
		Contact updatedContact = contactRepository.findById(id)
				.orElseThrow(()->new ResourceNotFoundException("Contact does not exists:" + id));
		updatedContact.setName(contactDetailes.getName());
		updatedContact.setPhoto(contactDetailes.getPhoto());
		updatedContact.setContact(contactDetailes.getContact());
		updatedContact.setEmail(contactDetailes.getEmail());
		updatedContact.setCompany(contactDetailes.getCompany());
		updatedContact.setTitle(contactDetailes.getTitle());
		updatedContact.setGroupId(contactDetailes.getGroupId());
		
		contactRepository.save(updatedContact);
		return ResponseEntity.ok(updatedContact);	
	}
	
	@DeleteMapping("{id}")
	public ResponseEntity<HttpStatus> deleteContact(@PathVariable int id) {
		Contact deletedContact = contactRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Contact does not exists:" + id));
		
		contactRepository.delete(deletedContact);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	
	
	
	
	
	
	
	
	
}
