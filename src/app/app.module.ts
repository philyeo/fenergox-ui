import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// Material
import {MyMaterialModule} from './shared/mymaterial.module';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {NgxMdModule} from 'ngx-md';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    HttpClientModule,
    AppRoutingModule,
    NgxMdModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
