package com.example.rental.rental;

import com.example.rental.car.Car;
import com.example.rental.car.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/rentals")
public class RentalController {
    @Autowired
    private CarRepository carRepository;

    @Autowired
    private RentalRepository rentalRepository;

    @GetMapping
    public List<Car> findAllOrders(){
        return carRepository.findAll();
    }

    @PostMapping
    public Car placeOrder(@RequestBody RentalRequest request){
        return carRepository.save(request.getCar());
    }
}
