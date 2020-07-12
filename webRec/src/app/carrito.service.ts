import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import{productos} from "./productos";



@Injectable({
  providedIn: 'root'
})
export class CarritoService {


  productos = productos;
  items=[];


url="http://127.0.0.1/services/"

  constructor(private http:HttpClient) { }



  adicionarCarrito(producto)
  {
    let encontrado=false;

    this.items.forEach((elemento)=>{
    if(elemento.id == producto.id)
    {
    encontrado=true;
    elemento.cantidad+=1;
  }
  });
      if(!encontrado)
      this.items.push(producto);


      localStorage.setItem("carrito",JSON.stringify(this.items));
  }

  limpiarCarrito()
  {
      this.items=[];
      return this.items;
  }

  listarCarrito()
  {

  this.items = JSON.parse(localStorage.getItem("carrito"));

    return this.items;
  }

  guardarDatos(datos)
  {

    let dato = [this.items,datos];

    localStorage.clear();

    return this.http.post(`${this.url}guardar.php`,JSON.stringify(datos));

  }

  guardarDatosContacto(datos)
  {

    let dato = [this.items,datos];

    localStorage.clear();
   
    return this.http.post(`${this.url}guardarContacto.php`,JSON.stringify(dato));

  }


  eliminar(id){

    const resultado=this.items.findIndex(e=>e.id ==id);
    this.items.splice(resultado,1);

    return this.items;

  }

}
