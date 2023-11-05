/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PlantListComponent } from './plant-list.component';
import { of } from 'rxjs';
import { PlantService } from '../plants.service';
import { IPlant } from '../../models';

describe('PlantListComponent', () => {
  let component: PlantListComponent;
  let fixture: ComponentFixture<PlantListComponent>;
  let plantService: PlantService;
  let template: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantListComponent ],
      imports: [
        HttpClientTestingModule,
      ],
      providers: [PlantService]
    })
    .compileComponents();

    const mockPlants = [
      { id: 1, nombre_comun: 'Planta 1', tipo: 'interior', clima: 'tropical' },
      { id: 2, nombre_comun: 'Planta 2', tipo: 'exterior', clima: 'templado' },
      { id: 3, nombre_comun: 'Planta 3', tipo: 'interior', clima: 'desértico' }
    ]
    plantService = TestBed.inject(PlantService);
    spyOn(plantService, 'getPlants').and.returnValue(of(mockPlants as IPlant[]));
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    template = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getPlants on init', () => {
    expect(plantService.getPlants).toHaveBeenCalled();
  });
});
