import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from '../../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
    `
    button{
      margin-top:10px
    }
    `
  ]
})
export class LoginComponent implements OnInit {

  formulario:FormGroup
  
  constructor(
    private fb:FormBuilder,
    private usuariosService:UsuariosService
  ) {

    this.formulario =  this.fb.group({
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
