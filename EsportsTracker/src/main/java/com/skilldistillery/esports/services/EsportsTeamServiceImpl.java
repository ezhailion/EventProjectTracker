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
		teamRepo.saveAndFlush(team);
		
		
		return team;
	}

	@Override
	public EsportsTeam update(int teamId, EsportsTeam team) {
		EsportsTeam original = teamRepo.searchById(teamId);
		original.setTeamName(team.getTeamName());
		original.setDisbandedDate(team.getDisbandedDate());
		original.setLastGamePlayed(team.getLastGamePlayed());

		teamRepo.saveAndFlush(original);
		return original;
	}

	@Override
	public boolean delete(int teamId) {
		// TODO Auto-generated method stub
		
		teamRepo.deleteById(teamId);
		return !teamRepo.existsById(teamId);
	}

}
