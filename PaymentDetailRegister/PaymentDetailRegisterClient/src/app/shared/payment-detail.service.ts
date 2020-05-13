import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
 
    // Atributo que manejara la info recibida por el formulario
   paymentDetailForm: PaymentDetail;

  // Raiz de ruta de api
  readonly rootApiUrl = 'http://localhost:50500/api/PaymentDetail';

  paymentDetailList: PaymentDetail[];

  constructor(private http: HttpClient) { }

  getPaymentsDetailsList() {
    this.http.get(`${this.rootApiUrl}`).subscribe((resp: any) => {
      this.paymentDetailList = resp;
    });
  }

  postPaymentsDetails() {
    return this.http.post(`${this.rootApiUrl}`, this.paymentDetailForm);
  }

  putPaymentsDetails() {
    return this.http.put(`${this.rootApiUrl}/${this.paymentDetailForm.PMId}`, this.paymentDetailForm);
  }

  deletePaymentDetail(id) {
    return this.http.delete(`${this.rootApiUrl}/${id}`);
  }

  getPaymentDetail(id) {
    return this.http.get(`${this.rootApiUrl}/${id}`);
  }
}
