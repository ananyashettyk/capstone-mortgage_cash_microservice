package com.exception;

public class CashApiRequestException extends RuntimeException {

	private static final long serialVersionUID = 1L;

	public CashApiRequestException(String message) {
		super(message);
	}

	public CashApiRequestException(String message, Throwable cause) {
		super(message, cause);
	}
	
	public CashApiRequestException() {
        super();
    }
    
    public CashApiRequestException(Throwable cause) {
        super(cause);
    }
}