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
    ProductComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      // { path: 'counter', component: CounterComponent },
      // { path: 'fetch-data', component: FetchDataComponent },
      {path:'product',component:ProductComponent}
    ])
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
