import { Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { ILoginUser } from '../Models/ILoginUser';
import { MoviesService } from '../services/movies.service';
import { Router } from '@angular/router';
import { IMovies } from '../Models/IMovies';
import { IUser } from '../Models/IUser';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errorMsg: string | null = null
  statuscodee: string = ''
  getData: IUser = {} as IUser

  constructor(private service: MoviesService, private router: Router) { }
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])

  })

  get username() {
    return this.loginForm.get('username')
  }
  get password() {
    return this.loginForm.get('password')
  }
  LoginUser() {
    let logUser: ILoginUser = {
      userName: this.username?.value,
      password: this.password?.value
    }
    this.service.loginUser(logUser).subscribe((data) => {
      console.log(data)
      if (data !== null) {
        this.router.navigate(['home', 'movies']);
      }

    }
      , (response) => {
        this.errorMsg = response.error;
        console.log(response.error, length)
        this.statuscodee = response.status;
      });
    console.log(this.getData)
    console.log(this.errorMsg)
    console.log(this.statuscodee)
    // if (this.errorMsg !== null) {
    //   this.router.navigate(['home', 'movies']);
    // }

  }

}
