import { TestBed } from '@angular/core/testing';

import { FirestoreShipmentService } from './firestore-shipment.service';

describe('FirestoreShipmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirestoreShipmentService = TestBed.get(FirestoreShipmentService);
    expect(service).toBeTruthy();
  });
});
