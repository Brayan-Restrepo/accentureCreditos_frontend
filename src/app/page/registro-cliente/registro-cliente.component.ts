import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyValidators } from 'src/app/Validator/validator';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.sass']
})
export class RegistroClienteComponent implements OnInit {

  private formRegistroCliente: FormGroup;

  constructor() { 
    this.formRegistroCliente = new FormGroup({
      identificacion: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      fechaNacimiento: new FormControl('', [Validators.required, MyValidators.date]),
    });
  }

  ngOnInit() {
  }

  public guardarRegistro():void {
    if(this.formRegistroCliente.valid) {
      console.log(this.formRegistroCliente);
      console.log(this.formRegistroCliente.valid);
      console.log(this.formRegistroCliente.value);
    } else {
      Swal.fire(
        'Error',
        'Datos incorrectos',
        'error'
      )    
    } 
  }
}
