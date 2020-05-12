import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  // Raiz de ruta de api
  readonly rootApiUrl = 'http://localhost:50500/api/PaymentDetail/';

  constructor(private http: HttpClient) { }

  getPaymentsDetailsList() {
    this.http.get(`${this.rootApiUrl}`);
  }

  postPaymentsDetails(paymentDetail: PaymentDetail) {
    this.http.post(`${this.rootApiUrl}`, paymentDetail);
  }

  putPaymentsDetails(paymentDetail: PaymentDetail) {
    this.http.put(`${this.rootApiUrl}${paymentDetail.PMId}`, paymentDetail);
  }

  deletePaymentsDetails(id) {
    this.http.delete(`${this.rootApiUrl}${id}`);
  }

  getPaymentDetail(id) {
    this.http.get(`${this.rootApiUrl}${id}`);
  }


}
