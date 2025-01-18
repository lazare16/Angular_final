import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { AppRoutingModule } from './app-routing.module'; // Ensure AppRoutingModule is imported
// import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
// import { AdminComponent } from './admin/admin.component';
// import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
// import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../app.component';
import { HomeComponent } from '../components/home/home.component';
import { AdminComponent } from '../components/admin/admin.component';
import { UnauthorizedComponent } from '../components/unauthorized/unauthorized.component';
import { LoginComponent } from '../components/login/login.component';
import { FormsModule } from '@angular/forms'; // For forms binding

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    UnauthorizedComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Import AppRoutingModule
    FormsModule, // Import FormsModule for [(ngModel)] usage in forms
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
