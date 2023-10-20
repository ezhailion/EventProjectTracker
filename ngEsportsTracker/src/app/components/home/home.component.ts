import { EsportsTeamService } from './../../services/esports-team.service';
import { Component, OnInit } from '@angular/core';
import { EsportsTeam } from 'src/app/models/esports-team';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
teams: EsportsTeam[] = [];
selected: EsportsTeam | null = null;
newTeam: EsportsTeam = new EsportsTeam();

constructor(
private teamService: EsportsTeamService
){

}
ngOnInit(): void {
this.loadTeams();
}


loadTeams(){
  this.teamService.index().subscribe({
    next: (teamList) => {
      this.teams = teamList;
    },
    error: (err) => {
      console.error('HomeComponent.loadTeams - error getting teams');
      console.error(err);
    }
  }

  )
}



}
