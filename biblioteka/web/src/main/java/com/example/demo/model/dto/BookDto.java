package com.example.demo.model.dto;

import com.example.demo.model.enumerations.Category;
import lombok.Data;

@Data
public class BookDto {
    private String name;
    private Integer availableCopies;
    private Long author;
    private Category category;

    public BookDto(){}

    public BookDto(String name, Integer availableCopies, Long author, Category category) {
        this.name = name;
        this.availableCopies = availableCopies;
        this.author = author;
        this.category = category;
    }
}
