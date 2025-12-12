import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getStorage, FirebaseStorage } from 'firebase/storage';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private app;
  public auth: Auth;
  public firestore: Firestore;
  public storage: FirebaseStorage;

  constructor() {
    // Initialize Firebase
    this.app = initializeApp(environment.firebase);
    
    // Initialize Firebase services
    this.auth = getAuth(this.app);
    this.firestore = getFirestore(this.app);
    this.storage = getStorage(this.app);
  }

  // Add your Firebase methods here
  // Example: Authentication, Firestore operations, Storage operations, etc.
}
