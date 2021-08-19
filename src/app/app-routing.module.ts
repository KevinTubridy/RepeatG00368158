import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'liverpool',
    loadChildren: () => import('./liverpool/liverpool.module').then( m => m.LiverpoolPageModule)
  },
  {
    path: 'mancity',
    loadChildren: () => import('./mancity/mancity.module').then( m => m.MancityPageModule)
  },
  {
    path: 'chelsea',
    loadChildren: () => import('./chelsea/chelsea.module').then( m => m.ChelseaPageModule)
  },
  {
    path: 'manutd',
    loadChildren: () => import('./manutd/manutd.module').then( m => m.ManutdPageModule)
  },
  {
    path: 'liverpoolplayers',
    loadChildren: () => import('./liverpoolplayers/liverpoolplayers.module').then( m => m.LiverpoolplayersPageModule)
  },
  {
    path: 'fixtures',
    loadChildren: () => import('./fixtures/fixtures.module').then( m => m.FixturesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
