package com.skilldistillery.esports.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
	@GetMapping("teams/{teamId}")
	public EsportsTeam findTeam( @PathVariable int teamId) {
	
		return teamServ.retrieveTeam(teamId);
	}
	@PostMapping("teams")
	public EsportsTeam createTeam(@RequestBody EsportsTeam team, HttpServletResponse resp, HttpServletRequest req) {
		EsportsTeam created = teamServ.create(team);
		
		if(created != null) {
			
			resp.setStatus(201);
			resp.setHeader("Location",req.getRequestURL().append("/").append(created.getId()).toString());
		}
		
		
		return created;
	}
	@PutMapping("teams/{teamId}")
	public EsportsTeam updateTeam(@PathVariable int teamId, @RequestBody EsportsTeam team, HttpServletResponse resp, HttpServletRequest req) {
		EsportsTeam updated = teamServ.update(teamId, team);
		
		resp.setHeader("Location",req.getRequestURL().append("/").append(updated.getId()).toString());
	
		return updated;
	}
	@DeleteMapping("teams/{teamId}")
	public void deleteTeam(@PathVariable int teamId, HttpServletResponse resp) {
		try {
			
			teamServ.delete(teamId);
			resp.setStatus(204);
		} catch (Exception e) {
			resp.setStatus(404);
			// TODO: handle exception
		}
		
	}
}
