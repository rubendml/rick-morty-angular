import { Component } from '@angular/core';
import { Characters } from './components/characters/characters';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Characters],
  template: `<app-characters></app-characters>`
})
export class App { }