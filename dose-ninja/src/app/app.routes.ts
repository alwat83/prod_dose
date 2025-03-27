import { Routes } from '@angular/router';
import { MedicationSearchComponent } from './components/medication-search/medication-search.component';
import { DrugDetailsComponent } from './components/drug-details/drug-details.component';
import { TrackingListComponent } from './components/tracking-list/tracking-list.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DosageCorrectionComponent } from './components/dosage-correction/dosage-correction.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

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
