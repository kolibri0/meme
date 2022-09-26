import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatFormFieldModule } from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatCheckboxModule} from '@angular/material/checkbox'
import {MatIconModule} from '@angular/material/icon'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatListModule} from '@angular/material/list'
import {MatRadioModule} from '@angular/material/radio'
import {MatCardModule} from '@angular/material/card'
import {MatExpansionModule} from '@angular/material/expansion'
import {MatPaginatorModule} from '@angular/material/paginator'
import {MatSlideToggleModule} from '@angular/material/slide-toggle'

const Materials = [
  MatButtonModule,
  MatButtonToggleModule,
  MatProgressSpinnerModule,
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
  MatIconModule,
  MatToolbarModule,
  MatListModule,
  MatRadioModule,
  MatCardModule,
  MatExpansionModule,
  MatPaginatorModule,
  MatSlideToggleModule,
]

@NgModule({
  exports: [Materials],
  imports: [Materials]
})
export class MaterialModule { }
