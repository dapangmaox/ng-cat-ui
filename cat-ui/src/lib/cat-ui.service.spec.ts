import { TestBed } from '@angular/core/testing';

import { CatUiService } from './cat-ui.service';

describe('CatUiService', () => {
  let service: CatUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
