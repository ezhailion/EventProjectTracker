package com.skilldistillery.esports.services;

import java.util.List;

import com.skilldistillery.esports.entities.EsportsTeam;

public interface EsportsTeamService {
	
	List<EsportsTeam> getAllTeams();
	EsportsTeam retrieveTeam(int teamId);
	EsportsTeam create(EsportsTeam team);
	EsportsTeam update(int teamId, EsportsTeam team);
	boolean delete(int teamId);
}
