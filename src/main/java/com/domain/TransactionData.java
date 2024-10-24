package com.domain;

import java.time.LocalDate;

import javax.persistence.Embeddable;

import lombok.Data;

@Data
@Embeddable
public class TransactionData {

	private int count;

	private LocalDate earliestDate;

	private LocalDate lastDate;

}
