package com;

import static org.junit.Assert.assertTrue;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.context.junit4.SpringRunner;

import com.domain.Cash;
import com.repository.CashRepository;
import com.service.CashService;

@RunWith(SpringRunner.class)
@ExtendWith(SpringExtension.class)
public class CashUnitTest {
	@Mock
	private CashRepository cashRepository;

	@MockBean
	CashService cashServiceMock;

	@Test
	public void Test2() {
		List<Cash> cashes = buildCashes();
		when(cashServiceMock.getCashDetails()).thenReturn(cashes);
		assertTrue(cashServiceMock.getCashDetails().get(0).getAccountHolderName().equals("accountHolderName"));
	}

	private List<Cash> buildCashes() {
		Cash cash1 = new Cash();
		cash1.setAccountHolderName("accountHolderName");
		cash1.setAccountName("acountName");
		List<Cash> cashes = new ArrayList<>();
		cashes.add(cash1);
		return cashes;
	}

}
