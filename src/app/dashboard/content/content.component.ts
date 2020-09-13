import { Component, OnInit } from '@angular/core';
import { DataStoreService } from 'src/app/service/data-store.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  initialData;
  nestedItems;
  constructor(private _dataStore : DataStoreService) { }

  ngOnInit(): void {
    this._dataStore.fetchInitialData().subscribe(data =>{
      
      this.initialData = data;

      this.nestedItems = Object.keys(this.initialData).map(key => {
        return this.initialData[key];
      });
      })


  }


}
