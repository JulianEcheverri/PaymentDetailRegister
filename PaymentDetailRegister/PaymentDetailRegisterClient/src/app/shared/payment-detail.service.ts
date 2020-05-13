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
    return this.http.get(`${this.rootApiUrl}`);
  }

  postPaymentsDetails(paymentDetail: PaymentDetail) {
    return this.http.post(`${this.rootApiUrl}`, paymentDetail);
  }

  putPaymentsDetails(paymentDetail: PaymentDetail) {
    return this.http.put(`${this.rootApiUrl}${paymentDetail.PMId}`, paymentDetail);
  }

  deletePaymentsDetails(id) {
    return this.http.delete(`${this.rootApiUrl}${id}`);
  }

  getPaymentDetail(id) {
    return this.http.get(`${this.rootApiUrl}${id}`);
  }


}
