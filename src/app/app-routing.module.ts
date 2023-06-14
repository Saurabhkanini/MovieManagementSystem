import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MoviesManagementComponent } from './movies-management/movies-management.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { ViewMovieComponent } from './view-movie/view-movie.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarrComponent } from './navbarr/navbarr.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: LoginComponent },
  { path: 'home/signup', component: SignUpComponent },
  { path: 'home/movies', component: MoviesManagementComponent },
  { path: 'home/addmovie', component: AddMovieComponent },
  { path: 'home/viewMovie/:id', component: ViewMovieComponent },
  { path: 'home/updateMovie/:id', component: UpdateMovieComponent },
  { path: 'home/footer', component: FooterComponent },
  { path: 'home/navbarr', component: NavbarrComponent },
  { path: 'home/aboutUs', component: AboutUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
