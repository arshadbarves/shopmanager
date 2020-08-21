import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { BillReferencesService } from 'src/app/services/bill-references.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bill-list-modal',
  templateUrl: './bill-list-modal.component.html',
  styleUrls: ['./bill-list-modal.component.scss'],
})
export class BillListModalComponent implements OnInit {

  
  billProfiles: Array<any> = new Array<any>();//Observable<any> = new Observable<any>();//any[]= [];
  myParameter: Array<any>;
  myOtherParameter: Date;
  constructor(private modalController: ModalController, private billProfileService: BillReferencesService,
              private navParams: NavParams) {
  }

  ionViewWillEnter() {
    this.myParameter = this.navParams.get('aParameter');
    console.log(this.myParameter);
    this.billProfiles = this.myParameter;
    this.myOtherParameter = this.navParams.get('otherParameter');
   this.UpdateDisplayDateFormat();

  }

  UpdateDisplayDateFormat(){
    this.billProfiles.forEach( (billProfile, index) => {
      let date : Date = new Date(billProfile.billDate);

      billProfile.billDispDate = date.toDateString();
    });
  }
  async myDismiss() {
    const result: any  = null;
    
    await this.modalController.dismiss(result);
  }

  async billProfileSelected(billProfile : any)
  {
    const result: any = billProfile;
    
    await this.modalController.dismiss(result);
    
  }

  ngOnInit() {
  }

}
