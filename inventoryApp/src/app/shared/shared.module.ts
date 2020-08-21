import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillListModalComponent } from './component/bill-list-modal/bill-list-modal.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [BillListModalComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  entryComponents: [
    BillListModalComponent
  ],
  exports: [
    BillListModalComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
