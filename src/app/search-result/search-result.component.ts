import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnChanges{
  search = '';
  @Input() textRecieve!:string;
  constructor(private service:SearchService){}

  ngOnChanges(changes: SimpleChanges): void {
    if(this.textRecieve&&this.textRecieve.length>0)
      this.search += this.textRecieve
  }

  onType(val:string){
    if(val.startsWith('\\') && !val.includes("@"))
      this.service.sendData(val.slice(0));
    if(val.includes('@') && !val.includes("#"))
      this.service.sendData(val.slice(val.indexOf("@")));
    if(val.includes('#') && !val.includes("$"))
      this.service.sendData(val.slice(val.indexOf("#")));
    if(val.includes('$'))
      this.service.sendData(val.slice(val.indexOf("$")));    
  }

  clear(){
    this.search = ''
    this.service.sendData(this.search);
  }
}
