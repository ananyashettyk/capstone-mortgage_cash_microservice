package com.serviceImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import com.annotation.TrackExecutionTime;
import com.constants.Constants;
import com.domain.Cash;
import com.exception.ResourceNotFoundException;
import com.repository.CashRepository;
import com.service.CashService;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;

@Data
@Slf4j
@Component
public class CashServiceImpl implements CashService {

	@Autowired
	private CashRepository cashRepository;

	@TrackExecutionTime
	@Override
	public ResponseEntity<Cash> postCashDetails(Cash cash) {
		try {
			cashRepository.save(cash);
		} catch (ResourceNotFoundException e) {
			log.info(e.getLocalizedMessage());
			throw new ResourceNotFoundException("Cash details not getting saved", HttpStatus.NOT_FOUND);
		}
		return ResponseEntity.ok(cash);
	}

	@Override
	public ResponseEntity<Cash> getCashDetailsById(Integer id) {
		Optional<Cash> cash = null;
		try {
			log.info("From the database...");
			cash = cashRepository.findById(id);
		} catch (Exception e) {
			throw new ResourceNotFoundException("Cash details not getting saved: " + e.getLocalizedMessage());
		}
		log.info("Fetching cash details : ");
		return ResponseEntity.ok(cash.get());
	}

	@Override
	public List<Cash> getCashDetails() {
		log.info("From the database...");
		return cashRepository.findAll();
	}

	@Override
	public ResponseEntity<Cash> updateCashDetails(Integer id) {
		ResponseEntity<Cash> existingCash = getCashDetailsById(id);
		
		log.info(Constants.CASH_UPDATES_SAVED_WITH_NEW_VALUES);
		return existingCash;
	}

	@Override
	public String deleteCashDetails(Integer id) {
		cashRepository.deleteById(id);
		return "Cash details deleted and saved...";
	}
}
