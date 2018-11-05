import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OpenRatesService {
  BASE_URI = 'https://api.openrates.io/latest';

  constructor(private http: HttpClient) { }

  public listAll() {
    return this.http.get(`${this.BASE_URI}`);
  }

  public getLatest(baseCurrency: string, newCurrency: string) {
    return this.http.get(`${this.BASE_URI}?base=${baseCurrency}&symbols=${newCurrency}`);
  }
}
