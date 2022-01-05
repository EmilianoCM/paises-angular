import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from '../../services/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {

  formulario:FormGroup
  
  constructor(
    private fb:FormBuilder,
    private usuariosService:UsuariosService
  ) {

    this.formulario =  this.fb.group({
      nombre:["",[Validators.required, Validators.minLength(4)]],
      correo:["",[Validators.required, Validators.email]],
      clave:["",[Validators.required, Validators.minLength(6)]]
    })
   }

   registrarse(){
     console.log(this.formulario.value);
     
     this.usuariosService.create(this.formulario.value);
   }

   ngOnInit(): void {
  }

}
