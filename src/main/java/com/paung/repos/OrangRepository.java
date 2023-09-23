package com.paung.repos;

import com.paung.entity.OrangEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrangRepository extends JpaRepository<OrangEntity, Long> {

}
