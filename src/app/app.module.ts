import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app.routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { MaterialModule } from './material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeliveriesComponent } from './deliveries/deliveries.component';
import { ShipmentsComponent } from './shipments/shipments.component';
import { ShipmentService } from './services/shipment.service';
import { FirestoreShipmentService } from './services/firestore-shipment.service';
import { ShipmentDetailComponent } from './shipment-detail/shipment-detail.component';
import { MasterDataService } from './services/master-data.service';
import { FilterService } from './services/filter.service';
import { FilterDialogComponent } from './filter-dialog/filter-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    DashboardComponent,
    DeliveriesComponent,
    ShipmentsComponent,
    ShipmentDetailComponent,
    FilterDialogComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  entryComponents: [
    FilterDialogComponent,
  ],
  providers: [
    { provide: ShipmentService, useClass: FirestoreShipmentService },
    MasterDataService,
    FilterService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
