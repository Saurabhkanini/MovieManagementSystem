import { Component, OnInit } from '@angular/core';
import { IAddMovies } from '../Models/IAddMovies';
import { IMovies } from '../Models/IMovies';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css']
})
export class UpdateMovieComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private service: MoviesService) { }
  movieId: string | null = '';
  public getMoviee: IMovies = {} as IMovies;
  addMovie: IAddMovies = {
    MovieName: '',
    Actor: '',
    Actress: '',
    Genres: '',
    ProductionHouse: '',
    Director: '',
    ImageData: ''
  }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.movieId = param.get('id')
      console.log(this.movieId)
    });
    if (this.movieId !== null)
      this.service.getMovie(parseInt(this.movieId)).subscribe((data) => {
        this.getMoviee = data;
        console.log(this.getMoviee)
      })


  }
  onFileSelected(event: any) {
    const file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = (event) => {
      const fileData = fileReader.result as ArrayBuffer;
      const byteArray = new Uint8Array(fileData);
      const numbersArray = Array.from(byteArray);
      const base64String = btoa(String.fromCharCode.apply(null, numbersArray));
      this.addMovie.ImageData = base64String;
      console.log(this.addMovie)
    }
    fileReader.readAsArrayBuffer(file);
  }
  UpdateMovie(movie: IMovies) {
    this.addMovie.MovieName = movie.movieName;
    this.addMovie.Actor = movie.actor;
    this.addMovie.Actress = movie.actress;
    this.addMovie.Genres = movie.genres;
    this.addMovie.ProductionHouse = movie.productionHouse;
    this.addMovie.Director = movie.director;
    if (this.addMovie.ImageData.length < 3) {
      this.addMovie.ImageData = movie.imageData;
    }
    console.log(this.addMovie);
    if (this.movieId !== null)
      this.service.updateMovie(parseInt(this.movieId), this.addMovie).subscribe((data) => {
        console.log(data);
      })

  }

}
