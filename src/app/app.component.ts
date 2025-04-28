import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { TodoComponent } from './todo/todo.component';
import { AllAboutDirectiveComponent } from './all-about-directive/all-about-directive.component';

@Component({
  selector: 'app-root',
  imports: [TodoComponent,AllAboutDirectiveComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
 fontSize = '80'
}
