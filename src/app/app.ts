import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { MyLib, MyComponent  } from 'my-lib';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet /*, MyLib, MyComponent */],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('my-app');
}
