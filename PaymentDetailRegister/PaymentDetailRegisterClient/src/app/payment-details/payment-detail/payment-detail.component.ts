import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { PaymentDetailService } from '../../shared/payment-detail.service';
import Swal from "sweetalert2";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styles: [
  ]
})
export class PaymentDetailComponent implements OnInit { 

  constructor(public paymentDetailService : PaymentDetailService) { }

  ngOnInit(): void {
    this.refreshForm();
  }

  // Para limpiar el formulario
  refreshForm(form?: NgForm) {
    if (form != null) form.form.reset();

    this.paymentDetailService.paymentDetailForm = {
      PMId: 0,
      CardOwnerName: '',
      CardNumber: '',
      ExpirationDate: '',
      CVV: ''
    }
  }

  updatePaymentDetail(form: NgForm) {
    if (form.invalid) {
      console.log("Formulario no valido");
      return;
    }
    // console.log(form);
    console.log(this.paymentDetailService.paymentDetailForm);

    // para cuando se guarde dispare el alert
    Swal.fire({
      title: "Espere",
      text: "Guardando información",
      icon: "info",
      allowOutsideClick: false
    });

    Swal.showLoading();

    // // variable observable para obtener los resultados de los dos observables del servicio
     let peticion: Observable<any>;

    // // si existe id, lo actualiza, sino lo crea
    peticion = this.paymentDetailService.paymentDetailForm.PMId ? 
      this.paymentDetailService.putPaymentsDetails() :
      this.paymentDetailService.postPaymentsDetails();

    peticion.subscribe(resp => {
      Swal.fire({
        title: this.paymentDetailService.paymentDetailForm.CardOwnerName,
        text: "Se actualizó correctamente",
        icon: "success",
      });
      console.log(resp);
      this.paymentDetailService.getPaymentsDetailsList();
      this.refreshForm(form);
    },
    error => {
      Swal.fire({
        title: this.paymentDetailService.paymentDetailForm.CardOwnerName,
        text: "No se actualizó la información",
        icon: "error",
      });
      console.log(error);
    });


  }

}