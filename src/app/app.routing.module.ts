import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeliveriesComponent } from './deliveries/deliveries.component';
import { ShipmentsComponent } from './shipments/shipments.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'deliveries', component: DeliveriesComponent },
  { path: 'shipments', component: ShipmentsComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  DashboardComponent,
  DeliveriesComponent,
  ShipmentsComponent,
]
