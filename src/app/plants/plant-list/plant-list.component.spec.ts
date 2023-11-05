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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getPlants on init', () => {
    expect(plantService.getPlants).toHaveBeenCalled();
  });

  it('should display a table with three rows of plants', () => {
    component.ngOnInit();
    fixture.detectChanges();
    const tableRows = fixture.nativeElement.querySelectorAll('tbody tr');
    expect(tableRows.length).toBe(3);
  });

  it('should calculate total interior and exterior plants correctly', () => {
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.totalInterior).toBe(2);
    expect(component.totalExterior).toBe(1);
  });
});
