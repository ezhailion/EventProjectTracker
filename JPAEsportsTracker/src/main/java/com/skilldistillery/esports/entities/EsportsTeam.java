package com.skilldistillery.esports.entities;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
@Entity
@Table(name="esports_team")
public class EsportsTeam {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column(name="team_name")
	private String teamName;
	@Column(name="create_date")
	@CreationTimestamp
	private LocalDateTime createDate;
	@Column(name="last_update")
	@UpdateTimestamp
	private LocalDateTime lastUpdate;
	@Column(name="last_game_played")
	private LocalDateTime lastGamePlayed;
	@Column(name="disband_date")
	private LocalDate disbandedDate;
	@Column(name="matches_played")
	private Integer matchesPlayed;

	public EsportsTeam() {
		super();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public LocalDateTime getCreateDate() {
		return createDate;
	}

	public void setCreateDate(LocalDateTime createDate) {
		this.createDate = createDate;
	}

	public LocalDateTime getLastUpdate() {
		return lastUpdate;
	}

	public void setLastUpdate(LocalDateTime lastUpdate) {
		this.lastUpdate = lastUpdate;
	}

	public LocalDateTime getLastGamePlayed() {
		return lastGamePlayed;
	}

	public void setLastGamePlayed(LocalDateTime lastGamePlayed) {
		this.lastGamePlayed = lastGamePlayed;
	}

	public LocalDate getDisbandedDate() {
		return disbandedDate;
	}

	public void setDisbandedDate(LocalDate disbandedDate) {
		this.disbandedDate = disbandedDate;
	}

	public String getTeamName() {
		return teamName;
	}

	public void setTeamName(String teamName) {
		this.teamName = teamName;
	}

	public void setMatchesPlayed(Integer matchesPlayed) {
		this.matchesPlayed = matchesPlayed;
	}

	public Integer getMatchesPlayed() {
		return matchesPlayed;
	}
//
//	public void setMatchesPlayed(int matchesPlayed) {
//		this.matchesPlayed = matchesPlayed;
//	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		EsportsTeam other = (EsportsTeam) obj;
		return id == other.id;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("EsportsTeam [id=");
		builder.append(id);
		builder.append(", teamName=");
		builder.append(teamName);
		builder.append(", createDate=");
		builder.append(createDate);
		builder.append(", lastUpdate=");
		builder.append(lastUpdate);
		builder.append(", lastGamePlayed=");
		builder.append(lastGamePlayed);
		builder.append(", disbandedDate=");
		builder.append(disbandedDate);
		builder.append(", matchesPlayed=");
		builder.append(matchesPlayed);
		builder.append("]");
		return builder.toString();
	}
	
	
}
