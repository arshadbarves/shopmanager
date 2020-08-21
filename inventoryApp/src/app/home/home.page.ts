import { Component } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import { BillListModalComponent } from '../shared/component/bill-list-modal/bill-list-modal.component';
import { OverlayEventDetail } from '@ionic/core';
import { BillReferencesService } from '../services/bill-references.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modalController: ModalController,
    private billProfileService: BillReferencesService,) {
}

  async openModal() {

    const billProfiles = await this.billProfileService.getBillReferenceList(15);
   
    const modal: HTMLIonModalElement =
       await this.modalController.create({
          component: BillListModalComponent,
          componentProps: {
             aParameter: billProfiles,
             otherParameter: new Date()
          },
          cssClass: "modal-fullscreen" 
    });
     
    modal.onDidDismiss().then((detail: OverlayEventDetail) => {
       if (detail !== null) {
         console.log('The result:', detail.data);
       }
    });

     // modal.requestFullscreen(true);
    await modal.present();
}

}
