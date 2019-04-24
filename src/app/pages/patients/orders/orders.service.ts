import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { Orders } from './orders.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  orders: Orders;
  constructor(private firestore: AngularFirestore) {}

  getOrders() {
    return this.firestore
      .collection('patients')
      .doc('patientData')
      .snapshotChanges();
  }
}
