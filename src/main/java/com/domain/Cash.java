package com.domain;

import java.io.Serializable;
import java.math.BigDecimal;

import javax.persistence.AttributeOverride;
import javax.persistence.AttributeOverrides;
import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.Max;
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "CASH")
public class Cash implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@SequenceGenerator(name="CASH_SEQ_GEN")
	private Integer id;

	@Column(name = "ACCOUNT_NAME")
	private String accountName;

	@Column(name = "TYPE")
	@NotBlank(message = "Type is mandatory")
	private String type;

	@Column(name = "PROVIDER_NAME")
	private String providerName;

	@Column(name = "PROVIDER_ID")
	private String providerID;

	@Column(name = "ACCOUNT_REFERENCE")
	private String accountReference;

	@Column(name = "ACCOUNT_HOLDER")
	private String accountHolderName;

	@Column(name = "BALANCE_DATE")
	private String balanceDate;

	@Column(name = "AMOUNT")
	private BigDecimal amount;

	@Column(name = "AER")
	private String AER;
	
    @Max(value = 3000)
	@Column(name = "OVERDRAFT_LIMIT")
	private Integer overdraftLimit;

	@Embedded
	@AttributeOverrides({ @AttributeOverride(name = "count", column = @Column(name = "transaction_Data_Count")),
			@AttributeOverride(name = "earliestDate", column = @Column(name = "transaction_Data_Earliest_Date")),
			@AttributeOverride(name = "lastDate", column = @Column(name = "transaction_Data_last_Date")) })
	@JsonProperty("transactionData")
	private TransactionData transactionData;

	@Column(name = "SORT_CODE_ACCOUNT_NUMBER")
	private String sortCodeAccountNumber;

	@Column(name = "IBAN")
	private String iban;

}
