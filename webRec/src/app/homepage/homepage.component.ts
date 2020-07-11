import { Component, OnInit } from '@angular/core';
import {productos} from '../productos';

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
