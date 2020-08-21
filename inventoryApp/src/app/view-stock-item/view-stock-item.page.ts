import { Component, OnInit } from '@angular/core';
import { StockItemService } from '../services/stock-item.service';

@Component({
  selector: 'app-view-stock-item',
  templateUrl: './view-stock-item.page.html',
  styleUrls: ['./view-stock-item.page.scss'],
})
export class ViewStockItemPage implements OnInit {

  searchQuery : any;
  stockItem: any;
  constructor(
    private stockItemService: StockItemService
  ) { }

  ngOnInit() {
  }

  search() {
    console.log('Searching for ' +this.searchQuery);
    this.stockItemService.getStockItem(this.searchQuery).then(
      (data) => {this.stockItem = data;},
      (error) => {console.log(error)}
    );
  }

}
