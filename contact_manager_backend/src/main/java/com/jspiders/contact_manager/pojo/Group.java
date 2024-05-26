package com.jspiders.contact_manager.pojo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "group")
public class Group {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int groupId;
	private String name;
}
