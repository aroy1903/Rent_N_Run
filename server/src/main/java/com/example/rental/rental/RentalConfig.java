package com.example.rental.rental;

import com.example.rental.customer.Customer;
import com.example.rental.customer.CustomerRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import java.time.LocalDate;
import java.util.List;

/*@Configuration
public class RentalConfig {
    @Bean
    CommandLineRunner commandLineRunner(RentalRepository repository) {
        return args -> {
            Customer mariam = new Customer("Mariam Jamal", "mariam.jamal@gmail.com", LocalDate.of(2000, 1, 5));
            Customer alex = new Customer("Alex Jamal", "alex.jamal@gmail.com", LocalDate.of(2004, 1, 5));
            repository.saveAll(List.of(mariam, alex));
        };
    }
}*/
