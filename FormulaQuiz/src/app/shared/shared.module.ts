import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {ScorebarComponent} from './scorebar/scorebar.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ScorebarComponent
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    ScorebarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
