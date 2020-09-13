import { Component, OnInit } from '@angular/core';
import { DataStoreService } from 'src/app/service/data-store.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  year : number;

  constructor(private _filterService : DataStoreService) { }

  ngOnInit(): void {
  }

  updateFilter(ev){
    this.year = +ev.target.innerHTML;
    console.log(this.year);
    this._filterService.updateYearFilter(this.year);
  }

}
