import { TestBed } from '@angular/core/testing';

import { NFCService } from './nfc.service';

describe('NfcService', () => {
  let service: NFCService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NFCService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
