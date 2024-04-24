package com.example.rental.user;

import java.util.List;
import java.util.Objects;
import java.util.Optional;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserService {
	private final UserRepository userRepository;
	
	@Autowired
	public UserService(UserRepository UserRepository) {
		this.userRepository = UserRepository;
	}

    /*
    //@Override
    public User findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    //@Override
    public User create(User user) {
        return userRepository.save(user);
    }*/


	// GET
	public List<User> getUser() {
    	return userRepository.findAll();	
    }
	
	// POST
	public void addUser(User user) {
		Optional<User> userOptional = userRepository.findByUsername(user.getUsername());
		if(userOptional.isPresent())
			throw new IllegalStateException("username taken!");
		userRepository.save(user);
	}
	
	// DELETE
	public void deleteUser(Long userId) {
		boolean exists = userRepository.existsById(userId);
		if(!exists)
			throw new IllegalStateException("user with id " + userId + " does not exist!");
		userRepository.deleteById(userId);
	}

	// PUT
	@Transactional
	public void updateUser(Long userId, String name, String password) {
		User user = userRepository.findById(userId).orElseThrow(() 
				-> new IllegalStateException("user with id " + userId + "does not exist!"));
		
		if(name != null && name.length() > 0 && !Objects.equals(user.getUsername(), name)){
            Optional<User> userOptional = userRepository.findByUsername(name);
            if(userOptional.isPresent())
                throw new IllegalStateException("username taken!");
            user.setUsername(name);
        }

		if(password != null && password.length() > 0 && !Objects.equals(user.getPassword(), password)) {
			user.setPassword(password);
		}	
	}
}
