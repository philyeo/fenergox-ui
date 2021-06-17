import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DocumentsComponent} from './documents.component';

export const routes: Routes = [
    {path: '', component: DocumentsComponent, pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DocumentsRoutingModule {
    
}