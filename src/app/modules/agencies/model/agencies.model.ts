export interface AgencyDTO {
  id: number;
  agencia: string;
  distrito: string;
  provincia: string;
  departamento: string;
  direccion: string;
  lat: number;
  lon: number;
}

export const DefaulLocation = {
  LAT: -12.10568371,
  LON: -77.03735314
};


