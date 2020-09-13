import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DataStoreService } from 'src/app/service/data-store.service';
import { Key } from 'protractor';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-filter-content',
  templateUrl: './filter-content.component.html',
  styleUrls: ['./filter-content.component.css']
})
export class FilterContentComponent implements OnInit, AfterViewInit{

  filteredByYear = [];
  yearFiltereData;
  year;
  nestedItems;
  flag= false;
  tempVar;

  constructor(private _dataStore : DataStoreService,
    private _route : ActivatedRoute) { 
   
  }

  ngAfterViewInit(){
    
  }

  ngOnInit(): void {
    this._route.params.subscribe(
      (params : Params) => {
        this.year = params['year'];
        this.filteredByYear = []
        this.getDataByYear()
      }
    )

    
  }
  getDataByYear(){
    this._dataStore.fetchInitialData().subscribe(data =>{
      this.flag = true;
      this.yearFiltereData = data;
      //console.log(this.yearFiltereData)
        this.nestedItems = Object.keys(this.yearFiltereData).map(key => {
          return this.yearFiltereData[key];
        });

        for(let key in Object.keys(this.nestedItems)){
          this.tempVar = this.nestedItems[key];
          
          Object.keys(this.tempVar).forEach(key => {
            if(this.tempVar[key] == this.year){
              this.filteredByYear.push(this.tempVar);
            }
          })

        }


      
})
    
  }

}
