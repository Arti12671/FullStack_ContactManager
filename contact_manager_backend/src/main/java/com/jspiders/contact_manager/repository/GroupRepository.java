package com.jspiders.contact_manager.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jspiders.contact_manager.pojo.Group;

@Repository
public interface GroupRepository extends JpaRepository<Group, Integer> {

}
