import { TestBed, inject } from '@angular/core/testing';

import { BetServiceService } from './bet-service.service';

describe('BetServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BetServiceService]
    });
  });

  it('should be created', inject([BetServiceService], (service: BetServiceService) => {
    expect(service).toBeTruthy();
  }));
});
