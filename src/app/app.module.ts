import { Modulo1Page } from './modulo1/modulo1.page';
import { MenuPage } from './menu/menu.page';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePage } from './home/home.page';
import { PerfilPage } from './perfil/perfil.page';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { Modal } from './modal/modal';
import { ModulosPage } from './modulos/modulos.page';
import { Modulo2Page } from './modulo2/modulo2.page';
import { Modulo3Page } from './modulo3/modulo3.page';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';

@NgModule({
  declarations: [AppComponent,HomePage,ModulosPage,PerfilPage,LoginComponent,MenuPage,Modulo1Page,Modulo2Page,Modulo3Page],
  entryComponents:[Modulo1Page,Modulo2Page,Modulo3Page],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,  
    HttpClientModule
  ],
  providers: [
    StatusBar,
    Modal,
    QRScanner,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
