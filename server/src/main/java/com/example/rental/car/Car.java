package com.example.rental.car;

import com.example.rental.rental.Rental;
import jakarta.persistence.*;
import java.util.List;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "cars")
public class Car {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(nullable = false)
    private String carName;

    @Column(nullable = false)
    private String model;

    @OneToMany(targetEntity = Car.class, cascade = CascadeType.ALL)
    //@JoinColumn(name = "car_fk", referencedColumnName = "id")
    private List<Rental> rentals;

    /*
    //imgUrl: img01,
    private String brand;
    private int rating;
    private double price;
    private double speed;
    private String gps;
    private String seatType;
    private String automatic;
    private String description;
    */

}
