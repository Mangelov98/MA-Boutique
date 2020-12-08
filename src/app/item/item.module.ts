import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewComponent } from './new/new.component';
import { ItemComponent } from './item/item.component';
import { ItemRoutingModule } from './item-routing.module';
import { DetailsComponent } from './details/details.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [NewComponent,ItemComponent, DetailsComponent],
  imports: [
    CommonModule,
    ItemRoutingModule,
    FormsModule,
    SharedModule
  ],
  exports: [
  ]
})
export class ItemModule { }
