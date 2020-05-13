import { Component, OnInit } from '@angular/core';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
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
  // Atributo que manejara la info recibida por el formulario
  paymentDetail =  new PaymentDetail();

  constructor(private paymentDetailService : PaymentDetailService) { }

  ngOnInit(): void {
    this.refreshForm();
  }

  // Para limpiar el formulario
  refreshForm(form?: NgForm) {
    if (form != null) form.form.reset();

    this.paymentDetail = {
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
    console.log(this.paymentDetail);

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
    peticion = this.paymentDetail.PMId ? 
      this.paymentDetailService.putPaymentsDetails(this.paymentDetail) :
      this.paymentDetailService.postPaymentsDetails(this.paymentDetail);

    peticion.subscribe(resp => {
      Swal.fire({
        title: this.paymentDetail.CardOwnerName,
        text: "Se actualizó correctamente",
        icon: "success",
      });
      console.log(resp);
    },
    error => {
      Swal.fire({
        title: this.paymentDetail.CardOwnerName,
        text: "No se actualizó la información",
        icon: "error",
      });
      console.log(error);
    });


  }

}