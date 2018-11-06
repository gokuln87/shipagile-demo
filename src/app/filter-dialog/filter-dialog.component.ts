import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { FilterService, filterProperty } from '../services/filter.service';

interface DialogDate {
  filterType: String,
}

@Component({
  selector: 'app-filter-dialog',
  templateUrl: './filter-dialog.component.html',
  styleUrls: ['./filter-dialog.component.css']
})
export class FilterDialogComponent implements OnInit {

  filterService: FilterService;
  filterproperty: filterProperty[] = [];
  title: String;

  constructor(fs: FilterService, @Inject(MAT_DIALOG_DATA) data: DialogDate) {
    this.filterService = fs;
    this.title = data.filterType;
    this.filterproperty = this.filterService.filters.get(data.filterType);
  }

  ngOnInit() {

  }

}
