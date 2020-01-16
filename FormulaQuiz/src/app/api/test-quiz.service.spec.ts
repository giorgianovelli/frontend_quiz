import { TestBed } from '@angular/core/testing';

import { TestQuizService } from './test-quiz.service';

describe('TestQuizService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestQuizService = TestBed.get(TestQuizService);
    expect(service).toBeTruthy();
  });
});
