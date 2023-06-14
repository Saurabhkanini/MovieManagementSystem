import { Component } from '@angular/core';
import { IAddMovies } from '../Models/IAddMovies';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent {
  constructor(private service: MoviesService) { }
  addMovie: IAddMovies = {
    MovieName: '',
    Actor: '',
    Actress: '',
    Genres: '',
    ProductionHouse: '',
    Director: '',
    ImageData: ''
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
  AddMovie() {
    this.service.addRoom(this.addMovie).subscribe((data) => {
      console.log(data);
    })

  }

}
