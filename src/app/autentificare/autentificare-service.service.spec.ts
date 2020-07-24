import { TestBed } from '@angular/core/testing';

import { AutentificareServiceService } from './autentificare-service.service';

describe('AutentificareServiceService', () => {
  let service: AutentificareServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutentificareServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
