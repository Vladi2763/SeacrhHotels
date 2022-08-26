type Geo = {
    lat: number;
    lon: number;
};
  
export type Location = {
    country: string;
    geo: Geo;
    name: string;
    state: null;
};