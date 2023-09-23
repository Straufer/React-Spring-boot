package com.paung.controller;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.paung.entity.OrangEntity;
import com.paung.service.OrangService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class OrangController {

    @Autowired
    private OrangService orangService;

    @GetMapping("/orang")
    @JsonFormat
    public List<OrangEntity> getAllUsers() {
        return orangService.getAllUsers();
    }

    @GetMapping("/orang/{id}")
    public Optional<OrangEntity> getById(@PathVariable Long id){
        return orangService.getById(id);
    }


}
