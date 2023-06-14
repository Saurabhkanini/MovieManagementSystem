import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule } from '@angular/forms';
import { MoviesService } from '../services/movies.service';
import { IRegisterUser } from '../Models/IRegisterUser';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  constructor(private service: MoviesService, private toastr: ToastrService) { }
  //typeOfMovie: string[] = ['comedy', 'drama', 'thriller', 'sci-fi'];

  errorMsg: string = '';
  loginForm = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-z]*')]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNo: new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}')]),
    gender: new FormControl('', [Validators.required]),
    movieType: new FormControl('', [Validators.required])
  })
  get userName() {
    return this.loginForm.get('userName');

  }
  get password() {
    return this.loginForm.get('password');
  }
  get confirmPassword() {
    return this.loginForm.get('confirmPassword');
  }
  get email() {
    return this.loginForm.get('email');
  }
  get phoneNo() {
    return this.loginForm.get('phoneNo');
  }
  get gender() {
    return this.loginForm.get('gender')
  }
  get movieType() {
    return this.loginForm.get('movieType')
  }
  ngOnInit(): void {
  }
  SignUp() {
    let regUser: IRegisterUser = {
      userName: this.userName?.value,
      password: this.password?.value,
      confirmPassword: this.confirmPassword?.value,
      email: this.email?.value,
      phoneNo: this.phoneNo?.value,
      gender: this.gender?.value,
      movieType: this.movieType?.value
    }
    console.log(this.loginForm.value)
    console.log(this.userName?.value)
    console.log(regUser)
    this.service.registerUser(regUser).subscribe((data) => {
      console.log(data);
      if (data !== null) {
        alert('user SignUp successful')
      }

    }, (response) => {
      this.errorMsg = response.error;
    });
    // if (this.errorMsg.length < 3)
    //   alert('user SignUp successful')
  }

}
