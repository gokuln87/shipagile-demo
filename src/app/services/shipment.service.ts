import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export enum ShipmentStatus {
  new = "New",
  carrier_selected = "Carrier Selected",
  label_printed = "Label Printed",
  shipped = "Shipped",
  delivered = "Delivered",
  invoiced = "Carrier Invoived"
}
interface Address {
  name: String,
  company: String,
  street1: String,
  city: String,
  state: String,
  zip: String,
  country: String
}
interface Partner {
  id: String,
  name: String,
  addressObjectId: String,
  address: Address
}
interface Item {
  itemNo: String,
  deliveryId: String,
  parcels: String[]
}
interface ServiceLevel {
  name: String,
  token: String
}
interface Rates {
  rateCreated: Date,
  rateObjectId: String,
  amount: Number,
  currency: String,
  amountLocal: Number,
  currencyLocal: String,
  provider: String,
  providerImageS: String,
  providerImageL: String,
  serviceLevel: ServiceLevel,
  estimatedDays: Number,
  durationTerms: String,
  carrierAccount: String
}
export interface Shipment {
  shipmentId: String,
  shipmentObjectId: String,
  createdOn: Date,
  createdBy: String,
  status: ShipmentStatus,
  planShipDate: Date,
  deliveryDate: Date,
  selectedCarrier: String,
  carrierImage: String,
  estimatedRate: Number,
  shipFrom: Partner,
  shipTo: Partner,
  lineItems: Item[],
  rates: Rates[]
}

@Injectable({
  providedIn: 'root'
})
export abstract class ShipmentService {

  abstract getShipment(): Observable<Shipment[]>;

}
