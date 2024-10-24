package com;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.math.BigDecimal;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import com.domain.Cash;
import com.repository.CashRepository;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@SpringBootTest(webEnvironment = WebEnvironment.DEFINED_PORT) 
class CapstoneApplicationTests {
	
	private RestTemplate restTemplate;
	String cashResourceUrl;
	
	@Autowired
	CashRepository cashRepository;
	
	@BeforeEach
	public void SetUp() {
		 cashResourceUrl = "http://localhost:8080/cashService";
		 restTemplate = new RestTemplate();
	}
	
	private void postCashDetails(Cash cash) {
		ResponseEntity<String> postCashDetails = restTemplate
				.postForEntity(cashResourceUrl + "/postCash", cash, String.class);
		log.info(">>>>>>>>>>>>>>>"+postCashDetails.getBody());
		assertTrue(postCashDetails.getBody().contains("abc"));
		
	}	

	
	// usign builder to build the object
	@Test
	public void shouldPostCashDetails() {
		Cash cash = Cash.builder()
				  .id(1)
				  .accountName("abc")
				  .accountHolderName("jsh")
				  .accountReference("kdkd")
				  .AER("kd")
				  .amount(new BigDecimal(2.1))
				  .balanceDate("92ei")
				  .type("type1")
				  .build();

		postCashDetails(cash);

		log.info("cashResourceUrl " + cashResourceUrl);
		assertThat(cash.getAccountName()).isEqualTo("abc");
		log.info("---->>>>>>>>" +  assertThat(cash.getId()).isEqualTo(1));		
	}
	
//	@Test
//	public void shouldThrowExceptionWhenTypeNullPostCashDetails2() {
//				log.info("cashResourceUrl " + cashResourceUrl);
//				Exception exception = assertThrows(ResourceNotFoundException.class, () -> {
//					Cash cash = Cash.builder()
//							  .id(1)
//							  .accountName("abc")
//							  .accountHolderName("jsh")
//							  .accountReference("kdkd")
//							  .AER("kd")
//							  .amount(new BigDecimal(2.1))
//							  .balanceDate("92ei")
//							  .type(" ")
//							  .build();
//					postCashDetails(cash);
//			    });
//				
//				String expectedMessage  = "cash details not getting saved";
//				String actualMessage = exception.getMessage();
//				System.out.println(">>>>>>>>>>>>>>>>>>" + exception.getMessage());
//				assertTrue(actualMessage.contains(expectedMessage));
//	}

	@Test
	public void shouldGetCashDetails() {
		shouldPostCashDetails();

		ResponseEntity<String> getCashDetails = restTemplate.getForEntity(cashResourceUrl + "/getCash", String.class);
		log.info(getCashDetails.getBody());
	}
	
	@Test
	public void shouldGetCashDetailsById() {
		shouldPostCashDetails();

		ResponseEntity<String> getCashDetails = restTemplate.getForEntity(cashResourceUrl + "/getCash"+ "?id=" , String.class);
		log.info(getCashDetails.getBody());
	}
	
//	@Test
//	public void shouldPutCashDetails() {
//		Cash initalCash = Cash.builder()
//				  .id(1)
//				  .accountName("abc")
//				  .accountHolderName("jsh")
//				  .accountReference("kdkd")
//				  .AER("kd")
//				  .amount(new BigDecimal(2.1))
//				  .balanceDate("92ei")
//				  .type("type1")
//				  .build();
//		
//		postCashDetails(initalCash);
//		
//		int id = 1;
//		Cash cash = Cash.builder()
//				  .id(1)
//				  .accountName("cba")
//				  .accountHolderName("hsj")
//				  .accountReference("zxzx")
//				  .AER("kd")
//				  .amount(new BigDecimal(2.1))
//				  .type("type1")
//				  .build();
//		
//		restTemplate.put(cashResourceUrl + "/updateCash" + "?id=" + id, cash, String.class);
//	     
//	     Optional<Cash> updatedCash = cashRepository.findById(id);
//	     
//	     assertTrue(updatedCash.get().getAccountName().equals("cba"));
//	     assertTrue(updatedCash.get().getAccountHolderName().equals("hsj"));
//	     assertTrue(updatedCash.get().getAccountReference().equals("zxzx"));
////	     assertTrue(updatedCash.get().getBalanceDate().equals("92ei"));
//	     
//	     log.info(">>>>>>>>>>>>>>>>>>>>>>>>" + updatedCash.get().getAccountName());
//	}
	

//	@Test
//	public void shouldDeleteCashDetails() {
//		Cash initalCash = Cash.builder()
//				  .id(1)
//				  .accountName("abc")
//				  .accountHolderName("jsh")
//				  .accountReference("kdkd")
//				  .AER("kd")
//				  .amount(new BigDecimal(2.1))
//				  .balanceDate("92ei")
//				  .type("type1")
//				  .build();
//		
//		postCashDetails(initalCash);
//
//		int id = 1;
//		Boolean flag = false;
//		List<Cash> list = cashRepository.findAll();
//		for(Cash cash:list) {
//			if(cash.getId() == id) {
//				restTemplate.delete(cashResourceUrl + "/deleteCash" + "?id=" + id);
//				flag = true;
//			}
//		}
//		assertTrue(flag.equals(true));
//	}
}