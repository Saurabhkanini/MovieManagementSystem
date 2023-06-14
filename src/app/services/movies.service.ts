import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovies } from '../Models/IMovies';
import { IAddMovies } from '../Models/IAddMovies';
import { IRegisterUser } from '../Models/IRegisterUser';
import { ILoginUser } from '../Models/ILoginUser';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }
  daturl: string = `https://localhost:7081/api/Movies`;
  getAllMovies(): Observable<IMovies[]> {
    return this.http.get<IMovies[]>(this.daturl);
  }
  addRoom(movie: IAddMovies): Observable<IAddMovies> {
    return this.http.post<IAddMovies>(this.daturl, movie);
  }
  getMovie(id: number): Observable<IMovies> {
    let url: string = `${this.daturl}/${id}`;
    return this.http.get<IMovies>(url)
  }
  deleteMovie(id: number): Observable<IMovies> {
    let url: string = `${this.daturl}/${id}`;
    return this.http.delete<IMovies>(url)
  }
  updateMovie(id: number, movie: IAddMovies): Observable<IAddMovies> {
    let url: string = `${this.daturl}/${id}`;
    return this.http.put<IAddMovies>(url, movie);
  }
  //Register and Login User
  registerUser(reg: IRegisterUser): Observable<IRegisterUser> {
    let dataurl2: string = `https://localhost:7081/api/Auth/register`;
    return this.http.post<IRegisterUser>(dataurl2, reg);
  }
  loginUser(log: ILoginUser): Observable<ILoginUser> {
    let dataurl2: string = `https://localhost:7081/api/Auth/login`;
    return this.http.post<ILoginUser>(dataurl2, log);
  }
}
