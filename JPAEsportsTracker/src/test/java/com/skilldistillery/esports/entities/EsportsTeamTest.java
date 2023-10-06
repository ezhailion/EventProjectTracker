package com.skilldistillery.esports.entities;

import static org.junit.jupiter.api.Assertions.*;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class EsportsTeamTest {
	private static EntityManagerFactory emf;
	private EntityManager em;
	private EsportsTeam team;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
	emf = Persistence.createEntityManagerFactory("JPAEsportsTracker");
	
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
	
		team = em.find(EsportsTeam.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		team = null;
		em.close();
	}

	@Test
	void test() {
		assertNotNull(team);
		assertEquals("SKT T1 Telecom", team.getTeamName());
		
	}

}
