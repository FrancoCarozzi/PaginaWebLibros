import { Component, OnInit } from '@angular/core';
import{productos} from '../productos';
import{CarritoService} from '../carrito.service';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent implements OnInit {


  producto = productos;

  constructor(private carrito:CarritoService) { }


  ngOnInit(): void {
  }

adicionarCarrito(producto)
{
  this.carrito.adicionarCarrito(producto)
  window.alert("producto agregado" + producto);
  
}


}
