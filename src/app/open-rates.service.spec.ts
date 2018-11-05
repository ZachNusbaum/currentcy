import { TestBed } from '@angular/core/testing';

import { OpenRatesService } from './open-rates.service';

describe('OpenRatesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OpenRatesService = TestBed.get(OpenRatesService);
    expect(service).toBeTruthy();
  });
});
