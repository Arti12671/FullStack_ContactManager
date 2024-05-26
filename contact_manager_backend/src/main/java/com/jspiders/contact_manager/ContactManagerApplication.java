package com.jspiders.contact_manager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.jspiders.contact_manager.pojo.Contact;
import com.jspiders.contact_manager.pojo.Group;
import com.jspiders.contact_manager.repository.ContactRepository;
import com.jspiders.contact_manager.repository.GroupRepository;

@SpringBootApplication
public class ContactManagerApplication implements CommandLineRunner {

	@Autowired
	private ContactRepository contactRepository;
	private GroupRepository groupRepository;

	public static void main(String[] args) {
		SpringApplication.run(ContactManagerApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		
//		int group=new Group();
//		group.setName("Family");
//		groupRepository.save(group);
		
//		Contact contact = new Contact();
//		contact.setName("Neha");
//		contact.setPhoto(
//				"https://img.freepik.com/premium-photo/3d-avatar-character_113255-32350.jpg?size=626&ext=jpg&ga=GA1.1.570072583.1715681516&semt=ais_user");
//		contact.setContact("8675666075");
//		contact.setEmail("neha@gmail.com");
//		contact.setCompany("Infosys");
//		contact.setTitle("Data Analyst");
//		contact.setGroupId(2);
//		
//		contactRepository.save(contact);
	}
}
