import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MyValidators } from 'src/app/Validator/validator';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-solicitud-credito',
  templateUrl: './solicitud-credito.component.html',
  styleUrls: ['./solicitud-credito.component.sass']
})
export class SolicitudCreditoComponent implements OnInit {

  private formSolicitudCredito: FormGroup;

  constructor() { 
    this.formSolicitudCredito = new FormGroup({
      nombreEmpresa: new FormControl('', [Validators.required]),
      nit: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
      salarioActual: new FormControl('', [Validators.required, MyValidators.enteroPositivo]),
      fechaIngreso: new FormControl('', [Validators.required, MyValidators.date]),
    });
  }

  ngOnInit() {}
    
  public guardarRegistro():void {
    if(this.formSolicitudCredito.valid) {
      console.log(this.formSolicitudCredito);
    } else {
      Swal.fire(
        'Error',
        'Datos incorrectos',
        'error'
      )    
    } 
  }
}
