import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';

export interface plantMasterData {
  id: String,
  name: String,
}
export interface carrierMasterData {
  id: String,
  name: String,
}

@Injectable({
  providedIn: 'root'
})
export class MasterDataService {

  private masterData: any;
  private masterDataSubscription: Subscription;
  private afs: AngularFirestore;

  constructor(db: AngularFirestore) {
    this.afs = db;
  }

  initialize() {
    this.masterDataSubscription = this.afs.doc('data/master').get()
      .subscribe(docSnap => {
        this.masterData = docSnap.data();
      });
  }

  getPlantMaster(): plantMasterData[] {
    return this.masterData.plant;
  }

  getCarrierMaster(): carrierMasterData[] {
    return this.masterData.carrier;
  }

  cancel() {
    this.masterDataSubscription.unsubscribe();
  }

}
