package com.example.rental.rental;

import com.example.rental.car.Car;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table//(name = "reservations")
public class Rental {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    //private LocalDate pickUpDate;
    //private LocalDate dropOffDate;
    //private double rentalAmount;
    //private String rentalNo;

    //@ManyToOne
    //private Car car;

    public void calculateRentalTotal(){

    }


}
