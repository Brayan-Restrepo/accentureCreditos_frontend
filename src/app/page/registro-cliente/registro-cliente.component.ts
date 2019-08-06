import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyValidators } from 'src/app/Validator/validator';
import Swal from 'sweetalert2';
import { RegistroClienteService } from 'src/app/services/registroCliente/registro-cliente.service';

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.sass']
})
export class RegistroClienteComponent implements OnInit {

  public formRegistroCliente: FormGroup;

  constructor( 
    private _registroCliente: RegistroClienteService
  ) { 
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
      this._registroCliente
        .postRegistro(this.formRegistroCliente.value)
        .subscribe(
          (response) => {
            Swal.fire('Bien','Cliente Registrado','success');   
          },
          (error) => {
            Swal.fire('Error',error.error.message,'error');    
          }
        );
    } else {
      Swal.fire('Error','Datos incorrectos','error');
    } 
  }
}
