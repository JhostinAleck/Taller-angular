import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSeriesComponent } from './listar-series.component';

describe('ListarSeriesComponent', () => {
  let component: ListarSeriesComponent;
  let fixture: ComponentFixture<ListarSeriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarSeriesComponent]
    });
    fixture = TestBed.createComponent(ListarSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
