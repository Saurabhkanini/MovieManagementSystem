import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovies } from '../Models/IMovies';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-view-movie',
  templateUrl: './view-movie.component.html',
  styleUrls: ['./view-movie.component.css']
})
export class ViewMovieComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private service: MoviesService) { }
  movieId: string | null = '';
  public getMovie: IMovies = {} as IMovies;


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.movieId = param.get('id')
      console.log(this.movieId)
    });
    if (this.movieId !== null)
      this.service.getMovie(parseInt(this.movieId)).subscribe((data) => {
        this.getMovie = data;
        console.log(this.getMovie)
      })


  }

}
