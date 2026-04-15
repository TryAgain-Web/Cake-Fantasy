// src/app/app-routing.module.ts
// ============================================================
// REPLACE your entire app-routing.module.ts with this file
// ============================================================
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './guards/admin.guard';

// Existing components (keep these)
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

// Admin layout
import { AdminComponent } from './pages/admin/admin.component';

// Admin sub-pages
import { ProductListComponent } from './pages/admin/product-list/product-list.component';
import { ProductFormComponent } from './pages/admin/product-form/product-form.component';
import { RecipeListComponent } from './pages/admin/recipe-list/recipe-list.component';
import { RecipeFormComponent } from './pages/admin/recipe-form/recipe-form.component';

const routes: Routes = [
  // Auth
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/register', component: RegisterComponent },

  // Admin section — protected by AdminGuard
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuard],
    children: [
      // Products
      { path: 'products', component: ProductListComponent },
      { path: 'products/new', component: ProductFormComponent },
      { path: 'products/edit/:id', component: ProductFormComponent },

      // Recipes
      { path: 'recipes', component: RecipeListComponent },
      { path: 'recipes/new', component: RecipeFormComponent },
      { path: 'recipes/edit/:id', component: RecipeFormComponent },

      // Default admin landing
      { path: '', redirectTo: 'products', pathMatch: 'full' }
    ]
  },

  // Root redirect
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/auth/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
