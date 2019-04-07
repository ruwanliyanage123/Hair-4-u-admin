import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import { SmartTable } from './smart-table.model';


@Injectable({
  providedIn: 'root'
})

export class SmartTableService {

  constructor(private firestore: AngularFirestore) { }

  getData(){
    return this.firestore.collection('data').snapshotChanges();
  }

  createData(table: SmartTable){
    return this.firestore.collection('table').add(table);
  }

  updateData(table: SmartTable){
    delete table.id;
    this.firestore.doc('table/'+ table.id).update(table);
  }

  deletePolicy(tableId: string){
    this.firestore.doc('table/'+ tableId).delete();
  }
}
