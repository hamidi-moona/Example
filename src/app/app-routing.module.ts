import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { CustomerPanelComponent } from './components/customer-panel/customer-panel.component';
import { EditTaskComponent } from './components/customer-panel/edit-task/edit-task.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'customerPanel',component:CustomerPanelComponent,canActivate:[AuthGuard]},
  {path:'adminPanel',component:AdminPanelComponent,canActivate:[AuthGuard]},
  {path:'task/:taskId/edit',component:EditTaskComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
