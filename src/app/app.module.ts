import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import {CuerpoComponente} from './componentes/body.component';
import {HeaderComponente} from './componentes/header.component';
import {PieComponente} from './componentes/pie.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponente,
    CuerpoComponente,
    PieComponente
  ],
  
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
