/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PlantService } from './plants.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Platns', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        PlantService,
      ]
    });
  });

  it('should ...', inject([PlantService], (service: PlantService) => {
    expect(service).toBeTruthy();
  }));
});
