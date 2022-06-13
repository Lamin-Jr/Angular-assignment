import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { WeatherCardComponent } from './home-assets/weather-card/weather-card.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { CityChipsComponent } from './home-assets/city-chips/city-chips.component';
import {MatChipsModule} from '@angular/material/chips';
import {PanelModule} from 'primeng/panel';
import {CardModule} from 'primeng/card';


const route: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [ CommonModule,FormsModule,RouterModule.forChild(route), MatCardModule, MatChipsModule, CardModule],
  exports: [RouterModule, HomeComponent], 
  declarations: [HomeComponent, WeatherCardComponent, CityChipsComponent]
})
export class HomeModule {}
