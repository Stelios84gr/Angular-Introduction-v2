import { Component } from '@angular/core';
// import { Person } from './shared/interfaces/person';
// import children components to pass data to
// import { PersonTable } from './components/person-table/person-table';
// import { EventBindExample } from './components/event-bind-example/event-bind-example';
//
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { ListGroupMenu } from './components/list-group-menu/list-group-menu';
import { Navbar } from './components/navbar/navbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListGroupMenu, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
};