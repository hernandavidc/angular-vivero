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

  constructor(private plantService: PlantService) { }

  ngOnInit(): void {
    this.plantService.getPlants().subscribe({
      next: (data: Plant[]) => {
        this.plants = data;
      },
      error: (err) => {
        console.error('There was an error fetching the plants:', err);
      }
    });
  }
}
