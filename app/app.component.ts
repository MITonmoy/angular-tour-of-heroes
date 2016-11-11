import { Component } from '@angular/core';

/**
 * Hero
 
 */
class Hero {
  id: number;
  name: string;
  constructor(parameters) { 
  }
}

@Component({
  selector: 'my-app',
  templateUrl: '/app/app.component.html'
})
export class AppComponent {
  title = 'Tour of Heroes';
  hero:Hero = {
    id: 1,
    name: 'Windstorm'
  };
  
 }
