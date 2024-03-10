package com.example.rental.user;

import java.util.List;
import java.util.Objects;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserService {
	private final UserRepository userRepository;
	
	@Autowired
	public UserService(UserRepository UserRepository) {
		this.userRepository = UserRepository;
	}

	// GET
	public List<User> getUser() {
    	return userRepository.findAll();	
    }
	
	// POST
	public void addNewUser(User user) {
		Optional<User> userOptional = userRepository.findUserByEmail(user.getEmail());
		
		if(userOptional.isPresent()) {
			throw new IllegalStateException("email taken!");
		}
		userRepository.save(user);
	}
	
	// DELETE
	public void deleteUser(Long userId) {
		boolean exists = userRepository.existsById(userId);
		if(!exists) {
			throw new IllegalStateException("user with id " + userId + " does not exist!");
		}
		userRepository.deleteById(userId);
	}

	// PUT
	@Transactional
	public void updateUser(Long userId, String name, String email) {
		User user = userRepository.findById(userId).orElseThrow(() 
				-> new IllegalStateException("user with id " + userId + "does not exist!"));
		
		if(name != null && name.length() > 0 && !Objects.equals(user.getName(), name)) {
			user.setName(name);
		}
		
		if(email != null && email.length() > 0 && !Objects.equals(user.getEmail(), email)) {
			Optional<User> userOptional = userRepository.findUserByEmail(email);
			if(userOptional.isPresent()) {
				throw new IllegalStateException("email taken!");
			}
			user.setEmail(email);
		}	
	}
}
