import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Shipment, ShipmentService } from '../services/shipment.service';

@Injectable({
  providedIn: 'root'
})
export class FirestoreShipmentService implements ShipmentService {

  afs: AngularFirestore;
  shipments: Observable<Shipment[]>;

  constructor(db: AngularFirestore) {
    this.afs = db;
  }

  getShipment() {
    this.shipments = this.afs.collection<Shipment>('shipments').valueChanges();
    return this.shipments;
  }
}
