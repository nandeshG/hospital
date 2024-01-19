import { Component, DoCheck, EventEmitter, OnInit, Output } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-func',
  templateUrl: './search-func.component.html',
  styleUrls: ['./search-func.component.css']
})
export class SearchFuncComponent implements  OnInit{
  constructor(private service:SearchService){}
  
  @Output() textEntered = new EventEmitter<string>();
  firstName=''
  lastName = ''
  chartNo=''
  address = ''


  ngOnInit(): void {
    this.service.myObservable.subscribe(res=>{
     if(!res){
      this.firstName = res;
      this.lastName=res;
      this.chartNo=res;
      this.address=res;
     }
     else{
      this.mapFields(res);
     }
    })
  } 

  onEnter(symbol:string,value:string){
    if(value){
      switch(symbol){
        case '\\':          
            this.firstName = value; 
            break;
        case '@':
            this.lastName = value;
            break;
        case '#':
            this.chartNo = value;
            break;
        case '$':
            this.address = value;
            break;
      } 
    this.textEntered.emit(symbol+value);
    }
  }

  mapFields(res:string){
    if(res.startsWith('\\'))
      this.firstName = res.slice(1)
    if(res.startsWith("@"))
      this.lastName = res.slice(1)
    if(res.startsWith("#"))
      this.chartNo = res.slice(1)    
    if(res.startsWith("$"))
      this.address = res.slice(1)
  }
  
}
