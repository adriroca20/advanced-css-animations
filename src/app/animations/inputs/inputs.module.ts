import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextComponent } from './text/text.component';
import { ChecklistComponent } from './checklist/checklist.component';


@NgModule({

  imports: [
    CommonModule
  ],
  declarations: [
    TextComponent,
    ChecklistComponent
  ],
  exports:[
    TextComponent,
    ChecklistComponent
  ]
})
export class InputsModule { }
