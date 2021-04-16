package com.example.demo.repository;

import com.example.demo.model.Book;
import com.example.demo.model.enumerations.Category;
import net.bytebuddy.agent.builder.AgentBuilder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.Optional;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
    Optional<Book> findByName(String name);
    void deleteByName(String name);
    List<Book> findByCategory(Category category);
    List<Book> findAllByOrderByIdAsc();
     Optional<Book> findById(Long id);
}
