import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StockItemService } from '../services/stock-item.service';
import { ModalController } from '@ionic/angular';
import { BillReferencesService } from '../services/bill-references.service';
import { BillListModalComponent } from '../shared/component/bill-list-modal/bill-list-modal.component';
import { OverlayEventDetail } from '@ionic/core';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.page.html',
  styleUrls: ['./stock-item.page.scss'],
})
export class StockItemPage implements OnInit {

  stock_item_form: FormGroup;

  constructor(public formBuilder: FormBuilder,
    private router: Router,
    private stockItemService: StockItemService,
    private modalController: ModalController,
    private billProfileService: BillReferencesService) { }

  ngOnInit() {
    this.stock_item_form = this.formBuilder.group({
      docId: new FormControl('', Validators.compose([
        Validators.maxLength(25),
        Validators.minLength(3),
        Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
        Validators.required
      ])),
      name: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      size: new FormControl('', Validators.required),
      qty: new FormControl('', Validators.required),
      unit: new FormControl('', Validators.required),
      rate: new FormControl(''),
      tax: new FormControl(''),
      expense: new FormControl(''),
      price: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[0-9]*.[0-9][0-9]')])),
      bill: new FormControl(''),
      ownedBy: new FormControl(''),
      ownedDate: new FormControl(''),
      AssignReq: new FormControl(''),
      AssignReqDate: new FormControl('')
    });    
    this.stock_item_form.controls["unit"].setValue("Quantity");
  }

  onSubmit(values) {
   
    this.stockItemService.addStockItem(values);
  }
  onSearchChange(value) {
    this.stock_item_form.controls["price"].setValue(100 * value);
  }

  async openModal() {

    const billProfiles = await this.billProfileService.getBillReferenceList(5);
   
    const modal: HTMLIonModalElement =
       await this.modalController.create({
          component: BillListModalComponent,
          componentProps: {
             aParameter: billProfiles,
             otherParameter: new Date()
          }
    });
     
    modal.onDidDismiss().then((detail: OverlayEventDetail) => {
       if (detail !== null) {
         console.log('The result:', detail.data);
       }
       this.stock_item_form.controls["bill"].setValue(detail.data.docId)
    });

    await modal.present();
}

}
