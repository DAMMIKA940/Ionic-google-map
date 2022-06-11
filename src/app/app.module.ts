import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { AgmDirectionModule} from 'agm-direction';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, GooglePlaceModule, AgmDirectionModule,  AgmCoreModule.forRoot({
    apiKey: 'AIzaSyAiOuKxmO0fR-azjwFPGiff04CtB15WIWQ',
    libraries: ['places','drawing','geometry']
  }), IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
