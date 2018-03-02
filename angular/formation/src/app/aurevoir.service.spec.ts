import { TestBed, inject } from '@angular/core/testing';

import { AurevoirService } from './aurevoir.service';

describe('AurevoirService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AurevoirService]
    });
  });

  it('should be created', inject([AurevoirService], (service: AurevoirService) => {
    expect(service).toBeTruthy();
  }));
});
