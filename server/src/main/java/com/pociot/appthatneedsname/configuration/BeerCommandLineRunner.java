package com.pociot.appthatneedsname.configuration;

import com.pociot.appthatneedsname.domain.Beer;
import com.pociot.appthatneedsname.repository.BeerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.stream.Stream;

@Component
@RequiredArgsConstructor
public class BeerCommandLineRunner implements CommandLineRunner {

  private final BeerRepository beerRepository;

  @Override
  public void run(String... args) throws Exception {
    Stream.of("Żywiec", "Heineken", "Carlsberg", "Łomża",
        "Leżajsk", "Corona", "Harnaś").forEach(name ->
        beerRepository.save(new Beer(name))
    );

    beerRepository.findAll().forEach(System.out::println);
  }
}
