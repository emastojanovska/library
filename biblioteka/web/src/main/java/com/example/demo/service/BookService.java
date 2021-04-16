package com.example.demo.service;

import com.example.demo.model.dto.BookDto;
import com.example.demo.model.enumerations.Category;
import com.example.demo.model.Book;

import java.util.List;
import java.util.Optional;

public interface BookService {
    List<Book> findAll();

    List<Book> findByCategory(Category category);

    Optional<Book> findById(Long id);

    Optional<Book> findByName(String name);
    Optional<Book> markAsTaken(Long id);

    Optional<Book> save(String name, Category category, Integer availableCopies, Long authorId);

    Optional<Book> save(BookDto bookDto);

    Optional<Book> edit(Long id, String name, Category category, Integer availableCopies, Long authorId);

    Optional<Book> edit(Long id, BookDto bookDto);

    void deleteById(Long id);

}
