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

  paymentSelected(selectedRecord: PaymentDetail) {
    this.paymentDetailService.paymentDetailForm = selectedRecord;
  }

  deletePayment(PMId){
    if (confirm('Are you sure to delete this record ?')) {
      this.paymentDetailService.deletePaymentDetail(PMId)
        .subscribe(res => {
          this.getPaymentsDetailsList();
        },
        err => { console.log(err); })
    }
  }

}
