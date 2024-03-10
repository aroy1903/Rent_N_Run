package com.example.rental.user;

import java.time.LocalDate;
import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class UserConfig {
	
	@Bean
	CommandLineRunner commanLineRunner(UserRepository repository) {
		return args -> {
			User mariam = new User("Mariam", "mariam.jamal@gmail.com", LocalDate.of(2000, 1, 5));
			
			User alex = new User("Alex", "alex.jamal@gmail.com", LocalDate.of(2004, 1, 5));
			
			repository.saveAll(List.of(mariam, alex));
		};
	}
}
