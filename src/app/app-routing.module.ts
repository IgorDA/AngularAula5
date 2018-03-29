import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmigoDetailComponent } from './amigo-detail/amigo-detail.component';
import { ComprasDetailComponent } from './compras-detail/compras-detail.component';
import { InicialComponent } from './inicial/inicial.component';

const routes: Routes = [
{ path: '', redirectTo: '/inicial', pathMatch: 'full' },
{ path: 'amigo', component: AmigoDetailComponent },
{ path: 'compra', component: ComprasDetailComponent },
{ path: 'inicial', component: InicialComponent },

];

@NgModule({
imports: [ RouterModule.forRoot(routes) ],
exports: [ RouterModule ]
})

export class AppRoutingModule {}