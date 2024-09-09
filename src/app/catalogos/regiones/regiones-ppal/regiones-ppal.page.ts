import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-regiones-ppal',
  templateUrl: './regiones-ppal.page.html',
  styleUrls: ['./regiones-ppal.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class RegionesPpalPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
