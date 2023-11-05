/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PlantService } from './plants.service';

describe('Service: Platns', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlantService]
    });
  });

  it('should ...', inject([PlantService], (service: PlantService) => {
    expect(service).toBeTruthy();
  }));
});
