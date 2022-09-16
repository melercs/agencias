import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { AgenciesComponent } from './modules/agencies/agencies.component';
import {HttpClientModule} from '@angular/common/http';
import {AgenciesModule} from './modules/agencies/agencies.module';
import {AgmCoreModule} from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    AgenciesComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        AgmCoreModule.forRoot({
          apiKey: 'AIzaSyCK8PLVa74SxwgRUv2nf9kFpwS5OIKh1JQ'
        }),
        AgenciesModule,
        AgmCoreModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
