import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { IMovies } from '../Models/IMovies';

@Component({
  selector: 'app-movies-management',
  templateUrl: './movies-management.component.html',
  styleUrls: ['./movies-management.component.css']
})
export class MoviesManagementComponent implements OnInit {
  constructor(private service: MoviesService) { }
  public movies: IMovies[] = [];
  ngOnInit(): void {
    this.service.getAllMovies().subscribe((data) => {
      this.movies = data;
    })

  }

  deleteMovie(id: number) {
    alert("Are You Sure")
    this.service.deleteMovie(id).subscribe((data) => { console.log(data) })
  }

}
