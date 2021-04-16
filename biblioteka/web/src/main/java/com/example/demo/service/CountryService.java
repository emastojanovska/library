package com.example.demo.service;

import com.example.demo.model.Country;

import java.util.List;

public interface CountryService {
    void delete(String name);
    List<Country> findAll();
}
