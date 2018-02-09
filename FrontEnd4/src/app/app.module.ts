import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { InlineEditorModule } from "ng2-inline-editor";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";



import { WheaderComponent } from "./widgets/w_header/w_header.component";
import { WFooterComponent } from "./widgets/w_footer/w_footer.component";
import { SliderBannerComponent } from "./modules/slider_banner/slider_banner.component";
import { SachNoiBatComponent } from "./modules/sach_noi_bat/sach_noi_bat.component";
import { SachMoiComponent } from "./modules/sach_moi/sach_moi.component";
import { ProductService } from "./services/product.service";
import { UserService } from "./services/user.service";
import { AlertService } from './services/alert.service';

@NgModule({
  declarations: [
    AppComponent,
    WheaderComponent,
    WFooterComponent,
    SliderBannerComponent,
    SachNoiBatComponent,
    SachMoiComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    InlineEditorModule,
    AngularFontAwesomeModule,
    RouterModule,
    HttpModule

  ],
  providers: [
    ProductService,
    UserService,AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
