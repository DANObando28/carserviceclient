import { Component, OnInit } from '@angular/core';
import { CarService } from '../shared/car/car.service';
import { GiphyService } from '../shared/giphy/giphy.service';
import {OwnerService} from '../shared/owner/owner.service';;

@Component({
  selector: 'app-carownerlist',
  templateUrl: './carownerlist.component.html',
  styleUrls: ['./carownerlist.component.css']
})
export class CarownerlistComponent implements OnInit {

  cars: Array<any>;
  owners: any;
  bucket: any[] = [];
  names: string[] = [];

  constructor(private ownerService:OwnerService,private carService: CarService, private giphyService: GiphyService) { }

  ngOnInit() {
    this.carService.getAll().subscribe(data => {
      this.cars = data;
      this.ownerService.getAll().subscribe(data=>{
        this.owners = data;
        Object.entries(data._embedded.owners).map(data => {this.bucket.push(data[1])})
      })
      console.log(this.bucket);
      
      for (let i = 0; i <  this.cars.length; i++) {
        let car = this.cars[i];
        if(car.ownerDni == null){
          this.names[i] = "";
          console.log("nam",this.names);
          
        }else{
          this.ownerService.get(car.ownerDni).subscribe((dueño:any) => {
          this.names[i] = dueño[0].name;
        });}
        
        
        this.giphyService.get(car.name).subscribe(url => car.giphyUrl = url);
      }
    }); 
  }

}
