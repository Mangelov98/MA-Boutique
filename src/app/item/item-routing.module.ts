import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { DetailsComponent } from './details/details.component';
import { ItemComponent } from './item/item.component';
import { NewComponent } from './new/new.component';

const routes: Routes = [
    {
      path: 'item',
      canActivateChild: [
        AuthGuard
      ],
      children: [
        {
          path: 'new',
          component: NewComponent,
          data: {
            isLogged: true,
            title: 'New Item'
          },
        },
        {
          path: '',
          pathMatch: 'full',
          component: ItemComponent,
          data: {
              isLogged: true,
            title: 'Item'
          }
        },
        {
          path: 'detail/:id',
          component: DetailsComponent,
          data: {
            title: 'Item Detail',
            isLogged: true
          }
        }
      ]
    }
  ];
  
  export const ItemRoutingModule = RouterModule.forChild(routes);