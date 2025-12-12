import { Component, input } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle } from '@ionic/angular/standalone';

/**
 * Reusable standalone header component for Ionic applications.
 * Displays a title in an Ionic toolbar within a header.
 * 
 * @example
 * ```html
 * <app-header title="My Page Title" />
 * ```
 * 
 * @example
 * ```html
 * <app-header [title]="pageTitle()" [translucent]="true" />
 * ```
 */
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle],
  template: `
    <ion-header [translucent]="translucent()">
      <ion-toolbar>
        <ion-title>{{ title() }}</ion-title>
      </ion-toolbar>
    </ion-header>
  `,
  styles: []
})
export class HeaderComponent {
  /**
   * The title to display in the header
   */
  title = input<string>('');

  /**
   * Whether the header should be translucent
   * @default true
   */
  translucent = input<boolean>(true);
}
