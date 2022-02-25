import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MuralComprarComponent } from '../mural-comprar/mural-comprar.component';
import { PainelComprarComponent } from '../painel-comprar/painel-comprar.component';

const rotas: Routes = [
  {path: 'mural', component: MuralComprarComponent},
  {path: 'painel', component: PainelComprarComponent},
  {path:'', redirectTo: '/mural', pathMatch:'full'}


]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(rotas)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
