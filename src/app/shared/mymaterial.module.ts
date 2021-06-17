import {NgModule} from '@angular/core';
import {MatButtonModule, MatDividerModule, MatIconModule, MatInputModule, MatNativeDateModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CdkTableModule} from '@angular/cdk/table';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTooltipModule, MatTooltip} from '@angular/material/tooltip';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatMenuModule, MatMenu} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatRadioModule} from '@angular/material/radio';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSliderModule} from '@angular/material/slider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatChipsModule} from '@angular/material/chips';
import { FieldLabelComponent } from './field-label/field-label.component';


/** 
 * NgModule that includes all Material modules that are required to serve the app
*/
@NgModule({
    exports: [
        FormsModule,
        MatCheckboxModule,
        MatTooltipModule,
        MatProgressSpinnerModule,
        MatAutocompleteModule,
        CdkTableModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatProgressBarModule,
        MatSelectModule,
        MatDialogModule,
        MatSnackBarModule,
        MatMenuModule,
        MatToolbarModule,
        MatRadioModule,
        MatGridListModule,
        MatDividerModule,
        MatCardModule,
        MatSlideToggleModule,
        MatSliderModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatChipsModule
    ],
    declarations: [FieldLabelComponent]
})
export class MyMaterialModule {
}