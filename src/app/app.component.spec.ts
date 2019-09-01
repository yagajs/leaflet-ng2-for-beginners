import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { YagaModule } from '@yaga/leaflet-ng2';
import { HttpClientModule, HttpClient } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ YagaModule, HttpClientModule ],
      declarations: [ AppComponent ],
      providers: [ HttpClient ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have a simple data model', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.data).toBeTruthy();
  });

  it(`should get a geojson from the geoJSON folder`, async () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect((await app.getFeatureCollection('point.geojson')).type).toBe('FeatureCollection');
  });

  it('should render the map', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.leaflet-pane')).toBeTruthy();
  });
});
