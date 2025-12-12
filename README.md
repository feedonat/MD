# MD App

An Angular Ionic application with Firebase and Capacitor integration.

## Features

- ⚡ **Angular 21** - Latest Angular framework
- 📱 **Ionic 8** - Cross-platform UI components
- 🔥 **Firebase** - Backend services (Authentication, Firestore, Storage)
- 📦 **Capacitor** - Native mobile app deployment for iOS and Android

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v20 or higher)
- npm (v10 or higher)
- Ionic CLI: `npm install -g @ionic/cli`

## Installation

1. Clone the repository:
```bash
git clone https://github.com/feedonat/MD.git
cd MD
```

2. Install dependencies:
```bash
npm install
```

## Firebase Setup

1. Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Register your web app in the Firebase project
3. Copy your Firebase configuration
4. Update the configuration in:
   - `src/environments/environment.ts` (for development)
   - `src/environments/environment.prod.ts` (for production)

Replace the placeholder values with your actual Firebase config:
```typescript
export const environment = {
  production: false,
  firebase: {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "YOUR_MEASUREMENT_ID"
  }
};
```

## Development

### Run in Browser

Start the development server:
```bash
npm start
# or
npm run ionic:serve
```

Navigate to `http://localhost:4200/` in your browser.

### Build for Production

```bash
npm run build
```

## Capacitor Setup

### Add Platforms

To add iOS platform:
```bash
npm run cap:add:ios
```

To add Android platform:
```bash
npm run cap:add:android
```

### Sync with Native Projects

After building your web app, sync the build to native projects:
```bash
npm run build
npm run cap:sync
```

### Open Native IDEs

Open iOS project in Xcode:
```bash
npm run cap:open:ios
```

Open Android project in Android Studio:
```bash
npm run cap:open:android
```

## Project Structure

```
MD/
├── src/
│   ├── app/
│   │   ├── home/              # Home page component
│   │   ├── services/          # Services (Firebase, etc.)
│   │   ├── app.ts             # Root component
│   │   ├── app.config.ts      # App configuration
│   │   └── app.routes.ts      # Route definitions
│   ├── environments/          # Environment configurations
│   ├── index.html             # Main HTML file
│   ├── main.ts                # Application entry point
│   └── styles.scss            # Global styles
├── capacitor.config.ts        # Capacitor configuration
├── angular.json               # Angular configuration
└── package.json               # Dependencies and scripts
```

## Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run ionic:serve` - Start Ionic development server
- `npm run cap:sync` - Sync web app with native platforms
- `npm run cap:add:android` - Add Android platform
- `npm run cap:add:ios` - Add iOS platform
- `npm run cap:open:android` - Open Android project
- `npm run cap:open:ios` - Open iOS project

## Firebase Services Integration

The app includes a Firebase service (`src/app/services/firebase.service.ts`) that provides access to:
- **Authentication** - User authentication
- **Firestore** - NoSQL database
- **Storage** - File storage

Example usage in a component:
```typescript
import { FirebaseService } from './services/firebase.service';

constructor(private firebaseService: FirebaseService) {
  // Access Firebase services
  const auth = this.firebaseService.auth;
  const firestore = this.firebaseService.firestore;
  const storage = this.firebaseService.storage;
}
```

## Resources

- [Angular Documentation](https://angular.io/docs)
- [Ionic Documentation](https://ionicframework.com/docs)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Capacitor Documentation](https://capacitorjs.com/docs)

## License

This project is licensed under the terms specified in the LICENSE file.App

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.3.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
