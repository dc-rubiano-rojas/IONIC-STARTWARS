import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilmDetailsPageRoutingModule } from './film-details-routing.module';

import { FilmDetailsPage } from './film-details.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilmDetailsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FilmDetailsPage]
})
export class FilmDetailsPageModule {}
