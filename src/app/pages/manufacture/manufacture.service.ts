import { Injectable } from '@angular/core';
import { Manufacture } from './manufacture.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManufactureService {
  manufacture: Manufacture;

  constructor(private firestore: AngularFirestore) {}

  addManufacture(object) {
    return from(
      this.firestore
        .collection('Manufacture')
        .doc('manufacture')
        .set(object)
    );
  }

  getManufacture() {
    return this.firestore
      .collection('Manufacture')
      .doc('manufacture')
      .snapshotChanges();
  }
}
