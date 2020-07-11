import { Component, OnInit } from '@angular/core';
import{ CarritoService} from '../carrito.service';
import{FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-lista-carrito',
  templateUrl: './lista-carrito.component.html',
  styleUrls: ['./lista-carrito.component.css']
})
export class ListaCarritoComponent implements OnInit {

 form;
  items=[];
  mensaje;
  constructor(private carrito:CarritoService, private formulario:FormBuilder) { 
this.form = this.formulario.group({ 
nombreF:'',
correoF:''


});


  }




  ngOnInit(): void {
    this.items=this.carrito.listarCarrito();
    console.log(this.items);
  }

  onSubmit(dato)
  {
console.log(dato);

this.mensaje = this.carrito.guardarDatos(dato);
this.mensaje.subscribe(datos =>{

console.log(datos.mensaje);

});

  }

  eliminar(id){

    const resultado=this.items.findIndex(e=>e.id ==id);
    this.items.splice(resultado,1);

    return this.items;

  }

}
