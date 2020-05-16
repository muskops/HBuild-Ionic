import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab2PageRoutingModule } from './tab2-routing.module';

import { Tab2Page } from './tab2.page';
import { PopTab1Component } from 'src/app/components/pop-tab1/pop-tab1.component';
import { PublicacionEditarPage } from '../publicacion-editar/publicacion-editar.page';
import { PublicacionEditarPageModule } from '../publicacion-editar/publicacion-editar.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  entryComponents:[
PopTab1Component,
PublicacionEditarPage,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab2PageRoutingModule,
    PublicacionEditarPageModule,
    ComponentsModule,
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
