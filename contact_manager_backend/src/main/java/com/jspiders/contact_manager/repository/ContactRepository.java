package com.jspiders.contact_manager.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jspiders.contact_manager.pojo.Contact;

@Repository
public interface ContactRepository extends JpaRepository<Contact, Integer> {

}
