package com.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.domain.Cash;
import com.exception.CashApiRequestException;
import com.exception.ResourceNotFoundException;
import com.service.CashService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;

@CrossOrigin("*")
@Slf4j
@RestController
@RequestMapping("/cashService")
@Api(value = "CashRestController", tags = "REST Apis related to Cash!!!!")
public class CashController {

	@Autowired
	private CashService cashService;

	@ApiOperation(value = "Add cash details", response = Cash.class)
	@PostMapping("/postCash")
	public ResponseEntity<Cash> postCashModel( @RequestBody Cash cash) {
		ResponseEntity<Cash> resp = null;
		log.info("From React ---->>>>>>>" + cash.getAccountHolderName());
		try {
			log.info("Inside add Cash details method");
			resp = cashService.postCashDetails(cash);
		}catch(ResourceNotFoundException e) {
			log.info(e.getLocalizedMessage());
			throw new ResourceNotFoundException("Cash details not getting saved" , HttpStatus.NOT_FOUND);
		}
		return resp;
	}

	@ApiOperation(value = "Getting cash details by id", response = Cash.class)
	@GetMapping("/getCashById/{id}")
	public ResponseEntity<Cash> getCashDetailsById(@PathVariable Integer id) {
		log.info("Inside get by id Cash details method");
		return cashService.getCashDetailsById(id);
	}

	@ApiOperation(value = "Getting cash details", response = Cash.class)
	@GetMapping("/getCash")
	public ResponseEntity<List<Cash>> getCashDetails() {
		log.info("Inside get Cash details method");
		return new ResponseEntity(getCashDetails(),HttpStatus.OK);
	}

	@ApiOperation(value = "Updating cash details", response = Cash.class)
	@PutMapping("/updateCash/{id}")
	public ResponseEntity<Cash> updateCashDetails(@PathVariable Integer id)
			throws CashApiRequestException {
		log.info("Inside update Cash details method");
		return cashService.updateCashDetails(id);
	}

	@ApiOperation(value = "Delete cash details", response = Cash.class, notes = "Deleting the cash details")
	@DeleteMapping("/deleteCash/{id}")
	public String deleteCashDetails(@PathVariable Integer id) {
		log.info("Inside delete Cash details method");
		return cashService.deleteCashDetails(id);
	}
}
