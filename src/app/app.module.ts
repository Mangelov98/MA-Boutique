import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { CoreModule } from './core/core.module';
import { FooterComponent } from './core/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { UserModule } from './user/user.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { ItemModule } from './item/item.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [ItemModule,
    UserModule,
    CoreModule,
    SharedModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent,
  HeaderComponent,
FooterComponent]
})
export class AppModule { }
