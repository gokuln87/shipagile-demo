import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ShipmentStatus, Shipment, ShipmentService } from '../services/shipment.service';
import { defineBase } from '@angular/core/src/render3';

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
