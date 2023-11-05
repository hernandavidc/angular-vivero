export interface IPlant {
  id: number;
  nombre_comun: string;
  nombre_cientifico: string;
  tipo: string;
  altura_maxima: number;
  clima: string;
  sustrato_siembra: string;
}

export class Plant implements IPlant {
  constructor(
    public id: number,
    public nombre_comun: string,
    public nombre_cientifico: string,
    public tipo: string,
    public altura_maxima: number,
    public clima: string,
    public sustrato_siembra: string
  ) {}
}
