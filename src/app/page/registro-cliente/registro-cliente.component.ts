import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
      fechaNacimiento: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
  }

  public guardarRegistro():void {
    console.log(this.formRegistroCliente.valid);
    console.log(this.formRegistroCliente.value);
  }
}
