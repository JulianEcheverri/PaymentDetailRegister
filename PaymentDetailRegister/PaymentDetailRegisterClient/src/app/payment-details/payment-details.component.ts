import { Component, OnInit } from '@angular/core';
import { PaymentDetail } from '../shared/payment-detail.model';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styles: [
  ]
})
export class PaymentDetailsComponent implements OnInit {
  // Lista de pagos
  paymentDetailList: PaymentDetail[];  
  
  constructor() { }

  ngOnInit(): void {
  }

}
