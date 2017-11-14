import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { CreationComponent } from './creation/creation.component';
import { ProductEditComponent  } from './product-edit/product-edit.component';
import { ProductDeleteComponent  } from './product-delete/product-delete.component';

const routes: Routes = [

     {path: '', pathMatch: 'full', redirectTo: 'home' },
     {path: 'home', component: HomeComponent },
     {path: 'products', component: ListComponent },
     {path: 'products/new', component: CreationComponent },
     {path: 'products/edit/:id', component: ProductEditComponent  },
     {path: 'products/delete/:id', component: ProductDeleteComponent  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
