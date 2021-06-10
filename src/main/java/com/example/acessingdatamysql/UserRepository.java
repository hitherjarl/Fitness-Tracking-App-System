package com.example.acessingdatamysql;

import java.util.*;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.example.acessingdatamysql.User;
public interface UserRepository extends CrudRepository<User, Integer>{
	@Query(value = "SELECT protein FROM USER",
		    nativeQuery = true)
	List<Integer> findByProtein();
	
	@Query(value = "SELECT carbs FROM USER",
			nativeQuery = true)
	List<Integer> findByCarbs();
	
	@Query(value = "SELECT fat FROM USER",
			nativeQuery = true)
	List<Integer> findByFat();
}
