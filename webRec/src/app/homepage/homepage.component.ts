import { Component, OnInit } from '@angular/core';
import {productos} from '../productos';
import{ CarritoService} from '../carrito.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  producto = productos;

  constructor() { }

  ngOnInit(): void {
    
  }

}
