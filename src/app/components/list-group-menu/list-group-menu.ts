import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-list-group-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './list-group-menu.html',
  styleUrl: './list-group-menu.css'
})
export class ListGroupMenu {
  menu = [
    { text: 'Component Input Example', linkName: 'component-input-example' },
    { text: '@for Directive Example', linkName: 'for-directive-example' },
    { text: 'Event Bind Example', linkName: 'event-bind-example' },
    { text: 'Simple Datatable Example', linkName: 'simple-datatable-example' },
    { text: 'Output Example', linkName: 'output-example' },
    { text: 'Template-Driven Form Example', linkName: 'template-driven-form-example' },
    { text: 'Reactive Form Example', linkName: 'reactive-form-example' },
    { text: 'HTTP Client Example', linkName: 'http-client-example' },
    { text: 'User Registration Example', linkName: 'app-user-registration-example' },
    { text: 'User Login', linkName: 'user-login'}
  ];
};