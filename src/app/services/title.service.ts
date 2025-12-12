import { Injectable, signal, computed } from '@angular/core';

/**
 * Service for managing page titles across the application.
 * Uses Angular signals for reactive title updates.
 */
@Injectable({
  providedIn: 'root'
})
export class TitleService {
  private _title = signal<string>('MD');

  /**
   * Read-only computed signal for the current title
   */
  readonly title = computed(() => this._title());

  /**
   * Sets the page title
   * @param title The new title to set
   */
  setTitle(title: string): void {
    this._title.set(title);
  }

  /**
   * Gets the current title value
   * @returns The current title string
   */
  getTitle(): string {
    return this._title();
  }
}
