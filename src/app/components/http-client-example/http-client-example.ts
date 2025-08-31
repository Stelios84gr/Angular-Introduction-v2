import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { JokesService } from '../../shared/services/jokesService';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-http-client-example',
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './http-client-example.html',
  styleUrl: './http-client-example.css'
})
export class HttpClientExample implements OnInit {
  jokesService = inject(JokesService);
  cdr = inject(ChangeDetectorRef);

  dadJoke: string = '';
  chuckNorrisJoke: string = '';

  ngOnInit(): void {
    // .subscribe(): after the promise is returned
  //   this.jokesService.getDadJoke().subscribe((data) => {
  //     console.log("Dad Joke Object:", data);
  //     console.log("Dad Joke:", data.joke);
  //     this.dadJoke = data.joke;
  //   });
    this.refreshDadJoke();  // loads joke directly

  //   this.jokesService.getChuckNorrisJoke().subscribe((data) => {
  //     console.log("Chuck Norris Joke Object:", data);
  //     console.log("Chuck Noris Joke:", data.value);
  //     this.chuckNorrisJoke = data.value;
  //   });
    this.refreshChuckNorrisJoke();  // loads joke directly
  };

  refreshDadJoke() {
    this.jokesService.getDadJoke().subscribe((data) => {
      console.log("Dad Joke", data.joke);
      this.dadJoke = data.joke;
      this.cdr.detectChanges();
    });
  };

  refreshChuckNorrisJoke() {
    this.jokesService.getChuckNorrisJoke().subscribe((data) => {
      console.log("Chuck Norris Joke", data.value);
      this.chuckNorrisJoke = data.value;
      this.cdr.detectChanges();
    });
  };
};
