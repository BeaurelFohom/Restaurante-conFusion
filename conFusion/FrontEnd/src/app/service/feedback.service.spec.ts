import { TestBed } from '@angular/core/testing';

import { FeedbackserviceService } from './feedback.service';

describe('FeedbackserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FeedbackserviceService = TestBed.get(FeedbackserviceService);
    expect(service).toBeTruthy();
  });
});
