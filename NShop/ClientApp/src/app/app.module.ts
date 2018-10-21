import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
// import { CounterComponent } from './counter/counter.component';
// import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { NshopConfigService } from './services/nshop-config.service';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appInitializerFn = (appConfig: NshopConfigService) => {
  return () => {
    return appConfig.loadAppConfig();
  };
}

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    // CounterComponent,
    // FetchDataComponent,
    ProductComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      {path:'product',component:ProductComponent},
      {path:'product/:id',component:ProductDetailsComponent}
    ]),
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [
    NshopConfigService,
    {
      provide:APP_INITIALIZER,
      useFactory:appInitializerFn,
      multi:true,
      deps:[NshopConfigService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
