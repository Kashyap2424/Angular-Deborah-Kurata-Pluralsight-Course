import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { ProductListComponent } from "./Products/Products-List.component";
import { ConvertToSpacePipe } from "./Products/Convert-to-space.pipe";
import { StarComponent } from "./shared/star.component";
import { ProductDetailComponent } from "./Products/product-detail.component";
import { WelcomeComponent } from "./home/welcome.component";

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacePipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
