import { Component, OnInit } from '@angular/core';
import { PlantService } from '../plants.service';
import { Plant } from '../../models';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: []
})
export class PlantListComponent implements OnInit {
  plants: Plant[] = [];
  totalInterior: number | boolean = false;
  totalExterior: number | boolean = false;

  constructor(private plantService: PlantService) { }

  calculateTotals(plants: Plant[]): void {
    this.totalInterior = plants.filter(plant => plant.tipo.toLowerCase() === 'interior').length;
    this.totalExterior = plants.filter(plant => plant.tipo.toLowerCase()  === 'exterior').length;
  }

  ngOnInit(): void {
    this.plantService.getPlants().subscribe({
      next: (data: Plant[]) => {
        this.plants = data;
        this.calculateTotals(data);
      },
      error: (err) => {
        console.error('There was an error fetching the plants:', err);
      }
    });
  }
}
