import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MuralComprarComponent } from './mural-comprar/mural-comprar.component';
import { RouterModule } from '@angular/router';
import { PainelComprarComponent } from './painel-comprar/painel-comprar.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { PrincipalComprarComponent } from './principal-comprar/principal-comprar.component';

@NgModule({
  declarations: [
    AppComponent,
    MuralComprarComponent,
    PainelComprarComponent,
    MenuComponent,
    RodapeComponent,
    PrincipalComprarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
