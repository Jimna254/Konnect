import { Routes } from '@angular/router';
import { LandingComponent } from './Components/landing/landing.component';
import { RegistrationformComponent } from './Components/registrationform/registrationform.component';
import { LoginformComponent } from './Components/loginform/loginform.component';
import { SpecialistregformComponent } from './Components/specialistregform/specialistregform.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'register', component: RegistrationformComponent },
  { path: 'login', component: LoginformComponent },
  { path: 'specialistreg', component: SpecialistregformComponent },
];
