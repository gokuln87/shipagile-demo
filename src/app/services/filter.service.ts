import { Injectable } from '@angular/core';
import { MasterDataService } from './master-data.service';

export interface filterProperty {
  id: String,
  name: String,
  isActive: Boolean,
}

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  isApplied: Boolean = false;
  filters = new Map();
  masterDataService: MasterDataService;

  constructor(public mds: MasterDataService) {
    this.masterDataService = mds;
    this.initialize();
  }

  initialize() {

    let plantFilterValues = this.masterDataService.getPlantMaster().map(val => {
      return {
        id: val.id,
        name: val.name,
        isActive: true
      }
    });

    this.filters.set("Plant", plantFilterValues);

    let carrierFilterValues = this.masterDataService.getCarrierMaster().map(val => {
      return {
        id: val.id,
        name: val.name,
        isActive: true
      }
    });

    this.filters.set("Carrier", carrierFilterValues);

  }

}
