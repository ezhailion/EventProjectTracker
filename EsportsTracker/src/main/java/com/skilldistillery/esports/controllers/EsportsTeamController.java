package com.skilldistillery.esports.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.esports.entities.EsportsTeam;
import com.skilldistillery.esports.services.EsportsTeamService;

@RestController
@RequestMapping("api")
public class EsportsTeamController {

	@Autowired
	private EsportsTeamService teamServ;
	
	@GetMapping("teams")
	public List<EsportsTeam> listTeams(){
		return teamServ.getAllTeams();
	}
	
	public EsportsTeam findTeam( @PathVariable int teamId) {
	
		return teamServ.retrieveTeam(teamId);
	}
}
