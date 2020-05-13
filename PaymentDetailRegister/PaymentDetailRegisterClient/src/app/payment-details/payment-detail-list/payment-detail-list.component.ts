import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import Swal from "sweetalert2";

@Component({
  selector: 'app-payment-detail-list',
  templateUrl: './payment-detail-list.component.html',
  styles: [
  ]
})
export class PaymentDetailListComponent implements OnInit {  

  constructor(public paymentDetailService : PaymentDetailService) { }

  ngOnInit(): void {
    this.paymentDetailService.getPaymentsDetailsList();
  }
 

  paymentSelected(selectedRecord: PaymentDetail) {
    this.paymentDetailService.paymentDetailForm = selectedRecord;
  }

  deletePayment(PMId){
    Swal.fire({
      title: "¿Está seguro?",
      text: `¿Está seguro que desea borrar el registro?`,
      icon: "question",
      showConfirmButton: true,
      showCancelButton: true
    }).then(resp => {
      if (resp.value) {
        this.paymentDetailService.deletePaymentDetail(PMId)
        .subscribe((res: any) => {
          this.paymentDetailService.getPaymentsDetailsList();
          console.log(res); 
          Swal.fire({
            title: res.CardOwnerName,
            text: "Eliminado correctamente",
            icon: "success",
          });
        },
        err => { 
          console.log(err); 
        });
      }
    });
  }
}
