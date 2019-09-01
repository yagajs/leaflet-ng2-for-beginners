import { Component } from '@angular/core';
import { FeatureCollection, LineString, Polygon, Point } from 'geojson';
import { dataModel } from './app.simple-model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'leaflet-ng2-for-beginners';
  public data = dataModel;
  private geoJSONMap: Map<string, Promise<FeatureCollection<LineString | Polygon | Point>>> = new Map();


  constructor(
    private http: HttpClient,
  ) {}


  public getFeatureCollection(path: string): Promise<FeatureCollection<LineString | Polygon | Point>> {
    if (this.geoJSONMap.has(path)) {
      return this.geoJSONMap.get(path);
    }
    const promise = this.http.get('/assets/geojson/' + path).toPromise() as Promise<FeatureCollection<LineString | Polygon | Point>>;

    this.geoJSONMap.set(path, promise);
    return promise;
  }

}
