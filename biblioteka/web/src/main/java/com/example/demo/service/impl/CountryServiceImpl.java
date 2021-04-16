package com.example.demo.service.impl;

import com.example.demo.model.Country;
import com.example.demo.repository.CountryRepository;
import com.example.demo.service.CountryService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountryServiceImpl implements CountryService {
    private final CountryRepository countryRepository;

    public CountryServiceImpl(CountryRepository countryRepository) {
        this.countryRepository = countryRepository;
    }

    @Override
    public void delete(String name) {
        this.countryRepository.deleteByNameLike(name);
    }

    @Override
    public List<Country> findAll() {
        return this.countryRepository.findAll();
    }
}
