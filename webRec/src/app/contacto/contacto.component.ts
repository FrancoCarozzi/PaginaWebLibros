import { Component, OnInit } from '@angular/core';
import{FormBuilder} from '@angular/forms';
import{ CarritoService} from '../carrito.service';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  form;
  mensaje;
  constructor(private carrito:CarritoService,private formulario:FormBuilder) {

    this.form = this.formulario.group({ 
      nombreF:'',
      correoF:''
      
      
      });
   }

   onSubmit(dato)
   {
 console.log(dato);
 
 this.mensaje = this.carrito.guardarDatosContacto(dato);
 this.mensaje.subscribe(datos =>{
 
 console.log(datos.mensaje);
 
 });
 
   }



  ngOnInit(): void {
  }

}
