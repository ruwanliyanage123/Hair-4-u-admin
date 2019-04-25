import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Waiting } from './waiting.model';

@Injectable({
  providedIn: 'root'
})
export class WaitingService {
  waiting: Waiting;

  constructor(private database: AngularFirestore) {}
}
