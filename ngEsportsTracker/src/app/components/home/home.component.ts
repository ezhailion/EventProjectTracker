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
editTeam: EsportsTeam | null = null;
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
addTeams(team:EsportsTeam): void{
  this.teamService.create(team).subscribe({
    next: (createdTeam) => {

    },
    error: (err) => {
      console.error('HomeComponent.addTeams: error creating team: ');
      console.error(err);
    }
  })

}
reload(){
  this.teamService.index().subscribe({
    next: (teams) => {
      this.teams = teams;

    },
    error: (err) => {
      console.error('HomeComponent - error getting teams: ');
      console.error(err);

    }
  })
}
editTeams(){
this.editTeam = Object.assign({}, this.selected);
}
updateTeam(team: EsportsTeam, setSelected: boolean = true){
  this.teamService.update(team).subscribe({
    next: (updatedTeam: EsportsTeam | null) => {
      if(setSelected){
        updatedTeam = this.selected;
        this.reload();
        this.editTeam = null;
      }
    },
    error: (err) => {
      console.error('HomeComponent.updateTeam: error occured: ');
      console.error(err);
    }
  })

}

destroy(id: number){
  this.teamService.delete(id).subscribe({
    next: (result) => {
      this.loadTeams();
      this.selected = null;
      this.editTeam = null;
    },
    error: (err) => {
      console.error('HomeComponent.destroy: error occured: ');
      console.error(err);
    }
  })

}



}
