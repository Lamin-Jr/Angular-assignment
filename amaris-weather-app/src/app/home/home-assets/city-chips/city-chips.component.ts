import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICities } from 'src/app/services/interfaces/weather.interface';

@Component({
  selector: 'city-chips',
  templateUrl: './city-chips.component.html',
  styleUrls: ['./city-chips.component.scss']
})
export class CityChipsComponent implements OnInit {

  @Input() cityName: string | undefined ="";
  @Input() countryTag: string | undefined = "";
  @Input() cityList: ICities[] = [];
  @Output() selectedCity = new EventEmitter<ICities>()

  constructor() { }

  ngOnInit(): void {
  }

  onCityClick(city:ICities) {
    this.selectedCity.emit(city)
  }


}
