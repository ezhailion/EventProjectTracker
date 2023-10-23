export class EsportsTeam {
  createDate: string;
  disbandedDate: string;
  id: number;
  lastGamePlayed: string;
  lastUpdate: string;
  matchesPlayed: number;
  teamName: string;
  constructor(
    createDate: string = '',
    disbandedDate: string = '',
    id: number = 0,
    lastGamePlayed: string = '',
    lastUpdate: string = '',
    matchesPlayed: number = 0,
    teamName: string = ''
    ){
      this.createDate = createDate;
      this.disbandedDate = disbandedDate;
      this.id = id;
      this.lastGamePlayed = lastGamePlayed;
      this.lastUpdate = lastUpdate;
      this.matchesPlayed = matchesPlayed;
      this.teamName = teamName
    }
  }
