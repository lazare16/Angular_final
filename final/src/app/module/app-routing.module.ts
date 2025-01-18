import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { HomeComponent } from '../components/home/home.component';
import { AdminComponent } from '../components/admin/admin.component';
import { UnauthorizedComponent } from '../components/unauthorized/unauthorized.component';
import { AuthGuard } from '../guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] }, // Open to all logged-in users
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], data: { role: 'admin' } }, // Admin-only
  { path: 'unauthorized', component: UnauthorizedComponent }, // Unauthorized access page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
