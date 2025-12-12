import { Component, OnInit, inject } from '@angular/core';
import { IonContent, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { HeaderComponent } from '../components/header.component';
import { TitleService } from '../services/title.service';

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss'],
  imports: [IonContent, IonButton, HeaderComponent],
})
export class AboutPage implements OnInit {
  private titleService = inject(TitleService);
  private router = inject(Router);

  // Expose the title signal for use in the template
  pageTitle = this.titleService.title;

  ngOnInit() {
    // Set a different title for this page
    this.titleService.setTitle('About');
  }

  goHome() {
    this.router.navigate(['/home']);
  }
}
