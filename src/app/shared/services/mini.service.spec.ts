import { TestBed } from '@angular/core/testing';

import { MiniService } from './mini.service';

describe('MiniService', () => {
  let service: MiniService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiniService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
