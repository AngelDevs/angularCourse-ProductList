import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpaces } from './shared/convert-to-spaces.pipe';
import { StarsCompoment } from './shared/star.compoment';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    StarsCompoment,
    ConvertToSpaces,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
