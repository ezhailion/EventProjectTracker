package com.skilldistillery.esports.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.esports.entities.EsportsTeam;

public interface EsportsTeamRepository extends JpaRepository<EsportsTeam, Integer>{
	
	

}
