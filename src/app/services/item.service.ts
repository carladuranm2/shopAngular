import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Item} from '../models/item';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  url:string = 'http://localhost:3000/items/';
   items:Item[] = [   
    {
      id:0,
      title:'manzana',
      price:1.5,
      quantity:4,
      completed:false
    },

    {
      id:0,
      title:'pan',
      price:3.5,
      quantity:3,
      completed:false
    },
    {
      id:0,
      title:'leche',
      price:1.5,
      quantity:2,
      completed:false
    }
  ];
    constructor() { }

    getItems(){
      return this.items;
    }
  
  }