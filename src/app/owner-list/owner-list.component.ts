import { Component, OnInit } from '@angular/core';
import {OwnerService} from '../shared/owner/owner.service';
import { CarService } from '../shared/car/car.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit {

  owners: any;
  bucket: any[]= [];
  c1: any[] = [];
  c2: any[] = [];
  borrarP: any [] = [];


  constructor(private ownerService: OwnerService, private carService: CarService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.ownerService.getAll().subscribe(data => {
      this.owners = data;
      Object.entries(data._embedded.owners).map(data => {this.bucket.push(data[1])})
    });
    
  }

  add(dni){
    for (let index = 0; index < this.borrarP.length; index++) {
      if (dni == this.borrarP[index]) {
        this.borrarP.splice(index, 1);
        return; 
      }
    }
    this.borrarP.push(dni);
    
    
  }
  delete (lista){
    for(let toRemove of lista){
      for(let owner of this.bucket){
        if(toRemove == owner.dni){
          
          this.ownerService.remove(owner._links.self.href).subscribe(result => {
            window.location.reload();
          }, error => console.error(error));
          this.carService.getAll().subscribe(data => {
            this.c1 = data;
            this.c2 = data;
            
            for(let car of this.c1){
              
              
              if(car.ownerDni == owner.dni){
                car.ownerDni = "";
                this.carService.save(car).subscribe(result => {
                  
                }, error => console.error(error));
              }
            }
            
          });
        }
      }
    }
  }
}
