import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { MarkAttendanceComponent } from './components/mark-attendance/mark-attendance.component';
import { ViewAttendanceComponent } from './components/view-attendance/view-attendance.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterServantComponent } from './components/register-servant/register-servant.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    MarkAttendanceComponent,
    ViewAttendanceComponent,
    ToolBarComponent,
    SideNavComponent,
    DashboardComponent,
    RegisterServantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
