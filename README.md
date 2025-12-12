# MD - Ionic & Capacitor App

This project is an Ionic Angular application with Capacitor integration for building native mobile applications.

## Prerequisites

- Node.js and npm
- Angular CLI
- Ionic CLI
- For iOS development: Xcode and CocoaPods (macOS only)
- For Android development: Android Studio and Android SDK

## Installation

Install the dependencies:

```bash
npm install
```

## Development

### Web Development Server

To start a local development server for web:

```bash
npm start
```

Or use Ionic CLI:

```bash
ionic serve
```

The application will be available at `http://localhost:4200/` (Angular CLI) or `http://localhost:8100/` (Ionic CLI).

### Building

To build the web application:

```bash
npm run build
```

This compiles the project and outputs the build artifacts to the `dist/md/browser/` directory.

## Capacitor Native Platforms

This project includes Capacitor for building native iOS and Android applications.

### Sync Native Projects

After building the web app, sync the changes to native projects:

```bash
npx cap sync
```

### iOS Development

To open the iOS project in Xcode:

```bash
npx cap open ios
```

**Note:** iOS development requires macOS with Xcode installed.

### Android Development

To open the Android project in Android Studio:

```bash
npx cap open android
```

### Adding Platforms

The Android and iOS platforms are already added. If you need to add them again:

```bash
npx cap add android
npx cap add ios
```

### Running on Devices

#### iOS
```bash
npx cap run ios
```

#### Android
```bash
npx cap run android
```

## Project Structure

- `src/` - Angular/Ionic source code
- `android/` - Native Android project (gitignored)
- `ios/` - Native iOS project (gitignored)
- `capacitor.config.ts` - Capacitor configuration

## Technologies

- **Angular 21** - Web framework
- **Ionic 8** - UI component library
- **Capacitor 8** - Native runtime for building cross-platform apps

## Reusable Components

### HeaderComponent

A standalone, reusable header component for Ionic applications that renders an `ion-header` with a configurable title and translucency.

#### Usage

```typescript
import { HeaderComponent } from './components/header.component';

@Component({
  imports: [HeaderComponent],
  // ...
})
```

```html
<!-- Basic usage with static title -->
<app-header title="My Page Title" />

<!-- With dynamic title from a signal -->
<app-header [title]="pageTitle()" />

<!-- With custom translucency -->
<app-header [title]="pageTitle()" [translucent]="false" />
```

#### Inputs

- `title` (string): The title to display in the header (default: '')
- `translucent` (boolean): Whether the header should be translucent (default: true)

### TitleService

A service for managing page titles across the application using Angular signals for reactive updates.

#### Usage

```typescript
import { inject, OnInit } from '@angular/core';
import { TitleService } from './services/title.service';

export class MyPage implements OnInit {
  private titleService = inject(TitleService);
  
  // Expose the title signal for use in templates
  pageTitle = this.titleService.title;

  ngOnInit() {
    // Set the page title
    this.titleService.setTitle('My Page Title');
  }
}
```

#### API

- `setTitle(title: string)`: Sets the page title
- `getTitle()`: Gets the current title value
- `title`: Read-only computed signal for the current title

#### Example

See the `home` and `about` pages for complete examples of using both the HeaderComponent and TitleService together.

## Additional Resources

- [Ionic Documentation](https://ionicframework.com/docs)
- [Capacitor Documentation](https://capacitorjs.com/docs)
- [Angular Documentation](https://angular.dev)
