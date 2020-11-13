import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Omar Abdo Task';

  transactions: any;
  currentTransaction = null;
  currentIndex = -1;

  page = 1;
  count = 0;
  pageSize = 2;
  pageSizes = [2,3,4,5, 6];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.retrieveTransactions(); 
  }

  getRequestParams(page, pageSize) {
    // tslint:disable-next-line:prefer-const
    let params = {};

    if (page) {
      params[`page`] = page - 1;
    }

    if (pageSize) {
      params[`per_page`] = pageSize;
    }

    return params;
  }

  retrieveTransactions() {
    const params = this.getRequestParams( this.page, this.pageSize);

    this.dataService.getAll(params)
      .subscribe(
        response => {
         
          this.transactions = response.Data.transactions;
          this.count = response.Data.paging.total;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  handlePageChange(event) {
    this.page = event;
    this.retrieveTransactions();
  }

  handlePageSizeChange(event) {
    this.pageSize = event.target.value;
    this.page = 1;
    this.retrieveTransactions();
  }

}
