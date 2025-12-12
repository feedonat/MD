import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  imports: [IonApp, IonRouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true
})
export class App {
  constructor() {}
}
