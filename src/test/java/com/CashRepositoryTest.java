package com;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import com.domain.Cash;
import com.repository.CashRepository;

@DataJpaTest
public class CashRepositoryTest {

	@Autowired
	private CashRepository cashRepository;

	@Test
	void shouldSaveAndFlush() {
		// given
		Cash cash = new Cash();
		cash.setId(10);
		cash.setAccountName("abc");
		cash.setType("type1");
		cash.setProviderName("def");

		cashRepository.save(cash);

		// when
		boolean exists = cashRepository.saveAndFlush(cash) != null;

		// then
		assertThat(exists).isTrue();
	}

}
