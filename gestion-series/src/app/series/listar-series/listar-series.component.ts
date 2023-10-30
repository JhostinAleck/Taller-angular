import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie.model';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-listar-series',
  templateUrl: './listar-series.component.html',
  styleUrls: ['./listar-series.component.css']
})
export class ListarSeriesComponent implements OnInit {
  series: Serie[] = [];
  avgSeasons: number = 0;

  constructor(private serieService: SerieService) { }

  ngOnInit(): void {
    this.serieService.getSeries().subscribe(data => {
      this.series = data;
      this.avgSeasons = this.series.reduce((acc, curr) => acc + curr.seasons, 0) / this.series.length;
    });
  }
}
