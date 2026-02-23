import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './pages/product/product.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { RecipesComponent } from './pages/recipes/recipes.component';


const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'product', component:ProductComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'recipes', component:RecipesComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
