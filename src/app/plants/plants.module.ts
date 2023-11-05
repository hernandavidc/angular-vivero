import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PlantService } from './plants.service';
import { PlantListComponent } from './plant-list/plant-list.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  declarations: [
    PlantListComponent,
  ],
  providers: [PlantService],
  exports: [
    PlantListComponent,
  ]
})
export class PlantsModule { }
