import { Component, OnInit, ElementRef } from '@angular/core';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-pm-aire',
  templateUrl: './pm-aire.component.html',
  styleUrls: ['./pm-aire.component.scss']
})
export class PmAireComponent implements OnInit {

  ubicacion: {};
  estadoAire: {};

  constructor(private ls: LocationService, private elementRef:ElementRef) { }

  ngOnInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#000000';

    //Obtener posicion del usuario
    this.ls.getPosition().then(pos =>{
      console.log(`Positon: ${pos.lng} ${pos.lat}`);
      this.ubicacion = {
        longitud: pos.lng.toFixed(2),
        latitud: pos.lat.toFixed(2)
      };

      this.estadoAire = {
        punto: "Medellin",
        color: "#8a8e0f",
        calidad: "Moderada",
        particulas: 25
      }
    })
  }

}
