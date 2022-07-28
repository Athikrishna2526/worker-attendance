import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { MarkAttendanceComponent } from './components/mark-attendance/mark-attendance.component';
import { RegisterServantComponent } from './components/register-servant/register-servant.component';
import { RegisterComponent } from './components/register/register.component';
import { ViewAttendanceComponent } from './components/view-attendance/view-attendance.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path:'',
        component:MarkAttendanceComponent
      }
   ]
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path:'servant',
    component:RegisterServantComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
