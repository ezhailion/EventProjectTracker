import { TestBed } from '@angular/core/testing';

import { EsportsTeamService } from './esports-team.service';

describe('EsportsTeamService', () => {
  let service: EsportsTeamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EsportsTeamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
