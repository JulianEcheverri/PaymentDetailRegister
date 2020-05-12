import { Component, OnInit } from '@angular/core';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { NgForm } from "@angular/forms";
import { PaymentDetailService } from '../../shared/payment-detail.service';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styles: [
  ]
})
export class PaymentDetailComponent implements OnInit {
  // Atributo que manejara la info recibida por el formulario
  formData: PaymentDetail;

  constructor(private paymentDetailService : PaymentDetailService) { }

  ngOnInit(): void {
    this.refreshForm();
  }

  // Para limpiar el formulario
  refreshForm(form?: NgForm) {
    if (form !== null) form.form.reset();

    this.formData = {
      PMId: 0,
      CardOwnerName: '',
      CardNumber: '',
      ExpirationDate: '',
      CVV: ''
    }
  }

}