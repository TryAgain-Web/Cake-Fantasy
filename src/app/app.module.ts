// src/app/app.module.ts
// ============================================================
// REPLACE your entire app.module.ts with this file
// ============================================================
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Existing components
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

// NEW Admin components
import { AdminComponent } from './pages/admin/admin.component';
import { ProductListComponent } from './pages/admin/product-list/product-list.component';
import { ProductFormComponent } from './pages/admin/product-form/product-form.component';
import { RecipeListComponent } from './pages/admin/recipe-list/recipe-list.component';
import { RecipeFormComponent } from './pages/admin/recipe-form/recipe-form.component';

// NEW Services & guards
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { AdminGuard } from './guards/admin.guard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    // Admin
    AdminComponent,
    ProductListComponent,
    ProductFormComponent,
    RecipeListComponent,
    RecipeFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    AdminGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
