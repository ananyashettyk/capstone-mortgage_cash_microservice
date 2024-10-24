package com;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;

import com.controller.CashController;

@WebMvcTest(controllers = CashController.class)
public class CashWebLayerTest {
	

	@Test
	public void shouldReturnDefaultMessage() throws Exception {
		
		
	}
		
}
