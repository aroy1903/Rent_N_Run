package com.example.rental.customer;

import java.util.List;
import java.util.Objects;
import java.util.Optional;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CustomerService {
    private final CustomerRepository customerRepository;

    @Autowired
    public CustomerService(CustomerRepository CustomerRepository) {
        this.customerRepository = CustomerRepository;
    }

    // GET
    public List<Customer> getCustomer() {
        return customerRepository.findAll();
    }

    // POST
    public void addCustomer(Customer customer) {
        Optional<Customer> customerOptional = customerRepository.findCustomerByEmail(customer.getEmail());
        if(customerOptional.isPresent())
            throw new IllegalStateException("Email taken!");
        customerRepository.save(customer);
    }

    // DELETE
    public void deleteCustomer(Long customerId) {
        boolean exists = customerRepository.existsById(customerId);
        if(!exists)
            throw new IllegalStateException("Customer with id " + customerId + " does not exist!");
        customerRepository.deleteById(customerId);
    }

    // PUT
    @Transactional
    public void updateCustomer(Long customerId, String name, String email) {
        Customer customer = customerRepository.findById(customerId).orElseThrow(()
                -> new IllegalStateException("Customer with id " + customerId + " does not exist!"));

        if(name != null && name.length() > 0 && !Objects.equals(customer.getName(), name))
            customer.setName(name);

        if(email != null && email.length() > 0 && !Objects.equals(customer.getEmail(), email)) {
            Optional<Customer> customerOptional = customerRepository.findCustomerByEmail(email);
            if(customerOptional.isPresent())
                throw new IllegalStateException("Email taken!");
            customer.setEmail(email);
        }
    }
}
