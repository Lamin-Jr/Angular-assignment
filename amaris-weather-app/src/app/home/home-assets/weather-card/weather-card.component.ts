import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {
  @Input() title: string | undefined= '';
  @Input() decription: string | undefined = '';
  @Input() country: string | undefined = '';

  constructor() { }

  ngOnInit(): void {
  }

}
