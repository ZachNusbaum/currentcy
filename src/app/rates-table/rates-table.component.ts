import { OpenRatesService } from './../open-rates.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rates-table',
  templateUrl: './rates-table.component.html',
  styleUrls: ['./rates-table.component.scss']
})
export class RatesTableComponent implements OnInit {
  rates: any[];

  constructor(private openRates: OpenRatesService) { }

  ngOnInit() {
    this.openRates.listAll().subscribe( (response: any) => {
      this.rates = response['rates'];
      console.log('Rates', this.rates);
    });
  }

}
