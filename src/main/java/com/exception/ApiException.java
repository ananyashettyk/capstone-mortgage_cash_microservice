package com.exception;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ApiException {


//	private String message;
//	private HttpStatus httpStatus;
//	private ZonedDateTime timeStamp;
	private Date timestamp;
	private String message;
	private String details;

	

}