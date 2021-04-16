package com.example.demo.service;

import com.example.demo.model.Author;
import com.example.demo.model.Country;

import java.util.List;
import java.util.Optional;

public interface AuthorService {
    Optional<Author> findById(Long id);
    List<Author> findAll();
    Optional<Author> save(String name, String surname, Country country);
    void deleteById(Long id);
}
