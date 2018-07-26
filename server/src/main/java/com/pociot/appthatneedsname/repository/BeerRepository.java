package com.pociot.appthatneedsname.repository;

import com.pociot.appthatneedsname.domain.Beer;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface BeerRepository extends MongoRepository<Beer, String> {

    public Beer findByName(String name);
}
