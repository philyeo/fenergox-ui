import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {MyMaterialModule} from '../app/shared/mymaterial.module';
import {NgxMdModule} from 'ngx-md';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        NgxMdModule.forRoot()
    ],
    exports: [
        CommonModule,
        BrowserAnimationsModule,
        MyMaterialModule,
        HttpClientModule,
        RouterTestingModule,
        NgxMdModule
    ]
})
export class TestingModule {

}