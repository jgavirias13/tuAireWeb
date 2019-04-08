import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-pm-aire',
  templateUrl: './pm-aire.component.html',
  styleUrls: ['./pm-aire.component.scss']
})
export class PmAireComponent implements OnInit {

  ubicacion: {};

  constructor(private ls: LocationService) { }

  ngOnInit() {
    this.ls.getPosition().then(pos =>{
      console.log(`Positon: ${pos.lng} ${pos.lat}`);
      this.ubicacion = {
        longitud: pos.lng,
        latitud: pos.lat
      };
    })
  }

}
