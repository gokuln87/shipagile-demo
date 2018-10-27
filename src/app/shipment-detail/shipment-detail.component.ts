import { Component, OnInit, Input } from '@angular/core';
import { Shipment } from '../services/shipment.service';

@Component({
  selector: 'app-shipment-detail',
  templateUrl: './shipment-detail.component.html',
  styleUrls: ['./shipment-detail.component.css']
})
export class ShipmentDetailComponent implements OnInit {

  @Input() shipment: Shipment;

  constructor() { }

  ngOnInit() {
  }

}
