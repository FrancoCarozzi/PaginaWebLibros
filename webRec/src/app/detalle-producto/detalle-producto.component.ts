import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {productos} from '../productos';
  

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {


  
  producto;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params=>{

let idproducto = Number(params.get("productoID"))-1;
          this.producto=productos[idproducto];


      });

  }

}
