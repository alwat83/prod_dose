import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MedicationSearchComponent } from './medication-search/medication-search.component';
import { DrugDetailsComponent } from './drug-details/drug-details.component';
import { TrackingListComponent } from './tracking-list/tracking-list.component';
import { DosageCorrectionComponent } from './dosage-correction/dosage-correction.component';
import { DashboardComponent } from './dashboard/dashboard.component';


export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'medication-search', component: MedicationSearchComponent },
  { path: 'drug-details', component: DrugDetailsComponent },
  { path: 'tracking-list', component: TrackingListComponent },
  { path: 'dosage-correction', component: DosageCorrectionComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default route
];
