package com.pociot.appthatneedsname.controller;

import com.pociot.appthatneedsname.domain.Beer;
import com.pociot.appthatneedsname.repository.BeerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.stream.Collectors;

@CrossOrigin
@RestController
@RequiredArgsConstructor
public class BeerController {

  private final BeerRepository repository;

  @GetMapping("/good-beers")
  public Collection<Beer> goodBeers() {
    return repository.findAll().stream()
        .filter(this::isGreat)
        .collect(Collectors.toList());
  }

  @GetMapping("/get-budweiser")
  public Beer getBudweiser() {
    return repository.findByName("Budweiser");
  }

  private boolean isGreat(Beer beer) {
    return !beer.getName().equals("Budweiser") &&
        !beer.getName().equals("Coors Light") &&
        !beer.getName().equals("PBR");
  }
}
