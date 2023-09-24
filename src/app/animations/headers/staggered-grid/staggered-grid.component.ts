import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staggered-grid',
  templateUrl: './staggered-grid.component.html',
  styleUrls: ['./staggered-grid.component.css']
})
export class StaggeredGridComponent{
  includeFilter:boolean = false;
  classIncludeFilter:string = "dontFilter";
  tiles:number[] = [1,2,3,4,5]

  changeFilter(){
    this.includeFilter = !this.includeFilter;
    if(this.includeFilter){
      this.classIncludeFilter = "filter";
    }
    else{this.classIncludeFilter = "dontFilter";}
  }
}
