import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Saloon } from './saloon.model';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaloonService {
  saloon: Saloon;

  constructor(private firestore: AngularFirestore) {}

  addSaloon(object) {
    return from(
      this.firestore
        .collection('Saloon')
        .doc('saloon')
        .set(object)
    );
  }

  getSaloon() {
    return this.firestore
      .collection('Saloon')
      .doc('saloon')
      .snapshotChanges();
  }
}
