import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  fetchedData;
  dataByLanding;
  
  yearFilter = new Subject();

  constructor(private httpClient : HttpClient) { }

  updateYearFilter(year){
    this.yearFilter.next(year);
  }
  getFilterYear(){
    return this.yearFilter;
  }
  fetchInitialData(){
    this.fetchedData =  this.httpClient.get('https://api.spaceXdata.com/v3/launches?limit=100');
    return this.fetchedData;
  }

  getDataByYear() : Observable<any>{
    return this.fetchedData;
    
  }
  getDataByLanding(){
    this.dataByLanding =  this.httpClient.get('https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=true');
    return this.dataByLanding;
  }
}
