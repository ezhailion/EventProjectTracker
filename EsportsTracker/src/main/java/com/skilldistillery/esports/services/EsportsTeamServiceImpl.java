package com.skilldistillery.esports.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.esports.entities.EsportsTeam;
import com.skilldistillery.esports.repositories.EsportsTeamRepository;
@Service
public class EsportsTeamServiceImpl implements EsportsTeamService {
	@Autowired
	private EsportsTeamRepository teamRepo;

	@Override
	public List<EsportsTeam> getAllTeams() {
		// TODO Auto-generated method stub
		return teamRepo.findAll();
	}

	@Override
	public EsportsTeam retrieveTeam(int teamId) {
		// TODO Auto-generated method stub
		if(!teamRepo.existsById(teamId)) {
			
			return null;
		}
		return teamRepo.searchById(teamId);
	}

	@Override
	public EsportsTeam create(EsportsTeam team) {
		
		
		
		return null;
	}

	@Override
	public EsportsTeam update(int teamId, EsportsTeam team) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean delete(int teamId) {
		// TODO Auto-generated method stub
		return false;
	}

}
