import { TestBed } from '@angular/core/testing';

import { ViewerservicesService } from './viewerservices.service';

describe('ViewerservicesService', () => {
  let service: ViewerservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewerservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
