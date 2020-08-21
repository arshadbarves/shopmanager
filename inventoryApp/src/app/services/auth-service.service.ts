import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }
  loginUser(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  resetPassword(email:string): Promise<void> {
    return firebase.auth().sendPasswordResetEmail(email);
  }
  
  logoutUser():Promise<void> {
    return firebase.auth().signOut();
  }

  getCurrentUser(): string {
    return firebase.auth().currentUser.email;
  }


}
