import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {DetalleProductoComponent} from './detalle-producto/detalle-producto.component';
import {ContactoComponent} from './contacto/contacto.component';

import {ListaProductoComponent} from './lista-producto/lista-producto.component';
import{ListaCarritoComponent} from './lista-carrito/lista-carrito.component';
import { from } from 'rxjs';


const routes: Routes = [
{path:'',component:HomepageComponent},
{path:'product',component:ListaProductoComponent},
{path:'contact',component:ContactoComponent},
{path:'carrito',component:ListaCarritoComponent},
{path:'carrito/:productoID',component:DetalleProductoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
