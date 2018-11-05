import { OpenRatesService } from './../open-rates.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-lookup-form',
  templateUrl: './lookup-form.component.html',
  styleUrls: ['./lookup-form.component.scss']
})
export class LookupFormComponent implements OnInit {
  currencies: any[] = [];
  result: Object = null;
  // @ViewChild('a') amount: ElementRef;
  // @ViewChild('b') bCurr: ElementRef;
  // @ViewChild('c') nAmount: ElementRef;
  // @ViewChild('d') nCurr: ElementRef;

  bAmount: number;
  bCurr: string;
  nAmount: number;
  nCurr: string;


  constructor(private openRates: OpenRatesService) { }

  ngOnInit() {
    this.openRates.listAll().subscribe( (response: any) => {
      for (let rate in response['rates']){
        if (response['rates'].hasOwnProperty(rate)) {
          this.currencies.push([rate, response['rates'][rate]]);
        }
      }
    } );
  }

  onSubmit(amount: number, base: string, newCurr: string) {
    console.log(event);
    this.openRates.getLatest(base, newCurr).subscribe((response: any) => {
      console.log('Res', response);
      this.result = response['rates'];

      this.bAmount = amount;
      this.bCurr = base;
      this.nCurr = newCurr;
      this.nAmount = amount * this.result[newCurr];
      console.log('result', this.result[newCurr]);
    });
    return false;
  }

}
