import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgxDrpOptions, PresetItem, Range } from 'ngx-mat-daterange-picker';
import { Shipment, ShipmentService } from '../services/shipment.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shipments',
  templateUrl: './shipments.component.html',
  styleUrls: ['./shipments.component.css']
})
export class ShipmentsComponent implements OnInit {
  search: FormGroup;
  dateRange: Range = { fromDate: new Date(), toDate: new Date() };
  dateOptions: NgxDrpOptions;
  datePresets: Array<PresetItem> = [];

  shipments: Observable<Shipment[]>;

  @ViewChild('dateRangePicker')
  dateRangePicker;

  constructor(fb: FormBuilder, shipmentService: ShipmentService) {
    this.search = fb.group({
      shippingPoint: [''],
      route: [''],
      dateRange: [''],
      shipTo: [''],
      dateFrom: [''],
      dateTo: [''],
      searchAll: ['']
    });

    this.shipments = shipmentService.getShipment();
  }

  ngOnInit() {
    const today = new Date();
    this.setupDatePresets();

    this.dateOptions = {
      presets: this.datePresets,
      format: 'mediumDate',
      range: { fromDate: today, toDate: today },
      applyLabel: "Submit",
      calendarOverlayConfig: {
        shouldCloseOnBackdropClick: false,
        hasBackdrop: false
      }
    }
  }
  updateDateRange(range: Range) {
    this.dateRange = range;
  }
  setupDatePresets() {
    const backDate = (numOfDays) => {
      const today = new Date();
      return new Date(today.setDate(today.getDate() - numOfDays));
    }
    const today = new Date();
    const yesterday = backDate(1);
    const minus7 = backDate(7)
    const minus30 = backDate(30);
    const currMonthStart = new Date(today.getFullYear(), today.getMonth(), 1);
    const currMonthEnd = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    const lastMonthStart = new Date(today.getFullYear(), today.getMonth() - 1, 1);
    const lastMonthEnd = new Date(today.getFullYear(), today.getMonth(), 0);

    this.datePresets = [
      { presetLabel: "Yesterday", range: { fromDate: yesterday, toDate: today } },
      { presetLabel: "Last 7 Days", range: { fromDate: minus7, toDate: today } },
      { presetLabel: "Last 30 Days", range: { fromDate: minus30, toDate: today } },
      { presetLabel: "This Month", range: { fromDate: currMonthStart, toDate: currMonthEnd } },
      { presetLabel: "Last Month", range: { fromDate: lastMonthStart, toDate: lastMonthEnd } }
    ]
  }
}

