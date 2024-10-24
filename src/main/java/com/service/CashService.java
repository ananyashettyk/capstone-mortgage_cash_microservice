package com.service;

import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.domain.Cash;

@Service
public interface CashService {
	
	ResponseEntity<Cash> postCashDetails(Cash cashModel);

	ResponseEntity<Cash> getCashDetailsById(Integer id);
	
	List<Cash> getCashDetails() ;
	
	ResponseEntity<Cash> updateCashDetails( Integer id);
	
	String deleteCashDetails(Integer id);
}
