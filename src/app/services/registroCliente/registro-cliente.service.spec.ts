import { TestBed } from '@angular/core/testing';

import { RegistroClienteService } from './registro-cliente.service';

describe('RegistroClienteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistroClienteService = TestBed.get(RegistroClienteService);
    expect(service).toBeTruthy();
  });
});
