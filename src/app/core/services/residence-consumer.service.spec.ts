import { TestBed } from '@angular/core/testing';

import { ResidenceConsumerService } from './residence-consumer.service';

describe('ResidenceConsumerService', () => {
  let service: ResidenceConsumerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResidenceConsumerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
