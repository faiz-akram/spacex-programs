import { Component, OnInit } from '@angular/core';
import { DataStoreService } from 'src/app/service/data-store.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  landingData;
  landingDataMap;
  landingStatus;
  tempData;
  launchStatus;
  statusFlag : boolean;
  landStausFlag : boolean;
  filteredByLandStatus = [];

  constructor(private _dataStore : DataStoreService, 
    private _route : ActivatedRoute) { }

  ngOnInit(): void {

    this._route.params.subscribe(
      (params : Params) => {
        this.launchStatus = params['status'];
        this.landingStatus = params['land-status'];
        if(this.landingStatus === 'true'){ this.landStausFlag = true; this.getDataByLandStatus(); }
        if(this.landingStatus === 'false'){ this.landStausFlag = false; this.getDataByLandStatus(); }
        if(this.launchStatus === 'true'){ this.statusFlag = true; this.getDataByLaunchStatus(); }
        if(this.launchStatus === 'false'){ this.statusFlag = false;  this.getDataByLaunchStatus(); }
        console.log(this.landingStatus);
        this.filteredByLandStatus = [];
        
      }
    )

    
  }
  getDataByLandStatus() {
    this._dataStore.getDataByLanding().subscribe(data =>{
      
      this.landingData = data;

      this.landingDataMap = Object.keys(this.landingData).map(key => {
        return this.landingData[key];
      });

      for(let key in Object.keys(this.landingDataMap)){
        this.tempData = this.landingDataMap[key]
        let rocket = this.tempData['rocket'];
        let firstStage = rocket['first_stage'];
        let cores = firstStage['cores'];
        for(let element in cores){
          let coreElemet = cores[element];
          if(coreElemet['land_success'] === this.landStausFlag){
            this.filteredByLandStatus.push(this.tempData);
          }
          
        }
        
          

      }

      })
  }

  getDataByLaunchStatus() {
    this._dataStore.getDataByLanding().subscribe(data =>{
      
      this.landingData = data;

      this.landingDataMap = Object.keys(this.landingData).map(key => {
        return this.landingData[key];
      });

      for(let key in Object.keys(this.landingDataMap)){
        this.tempData = this.landingDataMap[key]
        
        
          if(this.tempData['launch_success'] == this.statusFlag){
            // console.log("launch found")
            this.filteredByLandStatus.push(this.tempData);
          }
          

      }
      // console.log(this.tempData)

      })
  }

}
