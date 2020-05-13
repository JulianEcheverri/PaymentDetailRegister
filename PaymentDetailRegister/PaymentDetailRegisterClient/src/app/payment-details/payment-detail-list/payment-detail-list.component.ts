import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';

@Component({
  selector: 'app-payment-detail-list',
  templateUrl: './payment-detail-list.component.html',
  styles: [
  ]
})
export class PaymentDetailListComponent implements OnInit {
  paymentDetailList: PaymentDetail[];

  constructor(private paymentDetailService : PaymentDetailService) { }

  ngOnInit(): void {
    this.getPaymentsDetailsList();
  }

  getPaymentsDetailsList(){
    this.paymentDetailService.getPaymentsDetailsList().subscribe((resp: any) => {
      this.paymentDetailList = resp;
    });
  }


}
