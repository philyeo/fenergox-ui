import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';

export const routes: Routes = [
    {path: 'documents', loadChildren: () => import('../app/documents/documents.module').then(m => m.DocumentsModule)},
    {
        path: 'localRequirements',
        loadChildren: () => import('../app/local-requirements/local-requirements.module').then(m => m.LocalRequirementsModule)
    },
    {path: '', component: AppComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}