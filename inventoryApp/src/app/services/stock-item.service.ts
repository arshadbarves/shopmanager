import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class StockItemService {

  public stockItemDocument: firebase.firestore.DocumentReference;
  constructor(private authService: AuthServiceService ) { 
  
  }

  addStockItem(stockItem :any ) : Promise<void>
  {
    stockItem.ownedBy = this.authService.getCurrentUser();
    stockItem.ownedDate = firebase.firestore.Timestamp.fromDate(new Date());
    this.stockItemDocument = firebase.firestore().collection('/stockItem').doc(stockItem.docId);
    return this.stockItemDocument.set(stockItem);
  }

  getStockItem(docId: any){
    return new Promise( ( resolve, reject) => { 
      firebase.firestore().collection('stockItem').doc(docId).get()
      .then(function(docSnapShot) {  
        if(docSnapShot != null && docSnapShot.exists) {
          console.log(docSnapShot.data());
          var obj = docSnapShot.data(); // JSON.parse(JSON.stringify(docSnapShot.data()));
          //obj.$key = docSnapShot.id
          return resolve (obj); 
        }
        else {
          return resolve (null);
        }
      })
      .catch((reason)=>{
        reject(reason);
      });
    });
  }

  updateStockItem(document : any){
    return firebase.firestore().collection('stockItem').doc(document.docId).update(document);      
  }

  deleteStockItem(document: any) {
    return firebase.firestore().collection('stockItem').doc(document.docId).delete();
  }

  getStockItemList (noOfRecords: number): Promise<any>{
      return new Promise( ( resolve, reject) => { 
        firebase.firestore().collection("/stockItem").limit(noOfRecords).get({source: "default"})
        .then((querySnapshot) => {
          
        let arr = [];
        querySnapshot.forEach(function (doc) {
            var obj = JSON.parse(JSON.stringify(doc.data()));
            obj.$key = doc.id
            arr.push(obj);
        });

        if (arr.length > 0) {
            resolve(arr);
        } else {
            console.log("No such document!");
            resolve(null);
        }
    })
    .catch((error: any) => {
        reject(error);
    });
  });
  }
}
