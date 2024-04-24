package com.example.rental.customer;

import java.util.List;
import java.time.LocalDate;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CustomerConfig {
    @Bean
    CommandLineRunner commandLineRunner(CustomerRepository repository) {
        return args -> {
            Customer mariam = new Customer("Mariam Jamal", "mariam.jamal@gmail.com", LocalDate.of(2000, 1, 5));
            Customer alex = new Customer("Alex Jamal", "alex.jamal@gmail.com", LocalDate.of(2004, 1, 5));
            repository.saveAll(List.of(mariam, alex));
        };
    }
}
