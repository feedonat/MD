# Setup Guide

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Firebase Configuration

Before running the app, you need to configure Firebase:

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select an existing one
3. Click "Add app" and select the web platform (</>)
4. Register your app with a nickname
5. Copy the Firebase configuration object
6. Update `src/environments/environment.ts` and `src/environments/environment.prod.ts` with your configuration

Example:
```typescript
export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    authDomain: "your-app.firebaseapp.com",
    projectId: "your-app",
    storageBucket: "your-app.appspot.com",
    messagingSenderId: "123456789012",
    appId: "1:123456789012:web:abcdef1234567890",
    measurementId: "G-XXXXXXXXXX"
  }
};
```

### 3. Run Development Server

```bash
npm start
```

Open your browser at `http://localhost:4200`

## Building for Mobile

### Prerequisites for iOS

- macOS computer
- Xcode (latest version)
- CocoaPods: `sudo gem install cocoapods`

### Prerequisites for Android

- Java JDK 17 or higher
- Android Studio with Android SDK
- Environment variables:
  - `ANDROID_HOME`: Path to Android SDK
  - `JAVA_HOME`: Path to Java JDK

### Add Mobile Platforms

#### Build the web app first:
```bash
npm run build
```

#### Add Android:
```bash
npm run cap:add:android
npx cap sync android
```

#### Add iOS:
```bash
npm run cap:add:ios
npx cap sync ios
```

### Open in Native IDEs

#### Open Android Studio:
```bash
npm run cap:open:android
```

#### Open Xcode:
```bash
npm run cap:open:ios
```

### Sync After Code Changes

After making changes to your web code:

```bash
npm run build
npx cap sync
```

This will update the native projects with your latest web build.

## Capacitor Configuration

The `capacitor.config.ts` file contains the Capacitor configuration:

```typescript
import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.md.app',
  appName: 'MD App',
  webDir: 'dist/md-app/browser'
};

export default config;
```

You can customize:
- `appId`: Your app's unique identifier (reverse domain format)
- `appName`: The name of your app
- `webDir`: Path to your built web assets

## Firebase Services Setup

### Authentication

1. Enable Authentication in Firebase Console
2. Choose sign-in methods (Email/Password, Google, etc.)
3. Use the Firebase service in your components:

```typescript
import { FirebaseService } from './services/firebase.service';
import { signInWithEmailAndPassword } from 'firebase/auth';

constructor(private firebaseService: FirebaseService) {}

async login(email: string, password: string) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      this.firebaseService.auth,
      email,
      password
    );
    console.log('User logged in:', userCredential.user);
  } catch (error) {
    console.error('Login error:', error);
  }
}
```

### Firestore Database

1. Create a Firestore database in Firebase Console
2. Set up security rules
3. Use Firestore in your app:

```typescript
import { FirebaseService } from './services/firebase.service';
import { collection, addDoc, getDocs } from 'firebase/firestore';

constructor(private firebaseService: FirebaseService) {}

async addData() {
  const docRef = await addDoc(
    collection(this.firebaseService.firestore, 'users'),
    {
      name: 'John Doe',
      email: 'john@example.com'
    }
  );
  console.log('Document written with ID:', docRef.id);
}

async getData() {
  const querySnapshot = await getDocs(
    collection(this.firebaseService.firestore, 'users')
  );
  querySnapshot.forEach((doc) => {
    console.log(doc.id, ' => ', doc.data());
  });
}
```

### Storage

1. Enable Storage in Firebase Console
2. Configure storage rules
3. Use Storage in your app:

```typescript
import { FirebaseService } from './services/firebase.service';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

constructor(private firebaseService: FirebaseService) {}

async uploadFile(file: File) {
  const storageRef = ref(this.firebaseService.storage, 'uploads/' + file.name);
  const snapshot = await uploadBytes(storageRef, file);
  const downloadURL = await getDownloadURL(snapshot.ref);
  console.log('File available at:', downloadURL);
}
```

## Ionic Components

The app uses Ionic components for a native look and feel. Some commonly used components:

- `ion-header`: Page header
- `ion-toolbar`: Toolbar in header
- `ion-content`: Main content area
- `ion-button`: Buttons
- `ion-card`: Cards
- `ion-list`: Lists
- `ion-item`: List items
- `ion-input`: Input fields
- `ion-modal`: Modal dialogs
- `ion-alert`: Alert dialogs

Example:
```html
<ion-header>
  <ion-toolbar>
    <ion-title>My Page</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <ion-button expand="block">Click Me</ion-button>
</ion-content>
```

## Troubleshooting

### Port already in use
If port 4200 is in use:
```bash
ng serve --port 4300
```

### Capacitor sync errors
Make sure you've built the app first:
```bash
npm run build
npx cap sync
```

### iOS build errors
Update CocoaPods dependencies:
```bash
cd ios/App
pod install
```

### Android build errors
1. Ensure ANDROID_HOME is set correctly
2. Update Gradle in Android Studio
3. Sync Gradle files

## Additional Resources

- [Angular Documentation](https://angular.io)
- [Ionic Documentation](https://ionicframework.com/docs)
- [Capacitor Documentation](https://capacitorjs.com/docs)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Ionic Native/Capacitor Plugins](https://capacitorjs.com/docs/plugins)
