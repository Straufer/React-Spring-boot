package com.paung.service;

import com.paung.entity.OrangEntity;
import com.paung.repos.OrangRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.Optional;

@Service
public class OrangService {

    @Autowired
    private OrangRepository orangRepository;

    public List<OrangEntity> getAllUsers() {
        return orangRepository.findAll();
    }

    public Optional<OrangEntity> getById(Long id){
        return orangRepository.findById(id);
    }

}
