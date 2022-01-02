import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { CustomerPanelComponent } from './components/customer-panel/customer-panel.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { EmployeeTaskService } from './employee-task.service';
import { HttpClientModule } from '@angular/common/http';
import { EditTaskComponent } from './components/customer-panel/edit-task/edit-task.component';




@NgModule({
  declarations: [
    AppComponent,
    AdminPanelComponent,
    CustomerPanelComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    EditTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeeTaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
