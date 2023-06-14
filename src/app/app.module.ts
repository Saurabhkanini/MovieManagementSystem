import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MoviesManagementComponent } from './movies-management/movies-management.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { ViewMovieComponent } from './view-movie/view-movie.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarrComponent } from './navbarr/navbarr.component';
import { AboutUsComponent } from './about-us/about-us.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    MoviesManagementComponent,
    NavbarComponent,
    AddMovieComponent,
    ViewMovieComponent,
    UpdateMovieComponent,
    FooterComponent,
    NavbarrComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
