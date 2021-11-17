import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'signout',
    loadChildren: () => import('./signout/signout.module').then( m => m.SignoutPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'announce',
    loadChildren: () => import('./announce/announce.module').then( m => m.AnnouncePageModule)
  },
  {
    path: 'announce-detail',
    loadChildren: () => import('./announce-detail/announce-detail.module').then( m => m.AnnounceDetailPageModule)
  },
  {
    path: 'report',
    loadChildren: () => import('./report/report.module').then( m => m.ReportPageModule)
  },
  {
    path: 'report-detail',
    loadChildren: () => import('./report-detail/report-detail.module').then( m => m.ReportDetailPageModule)
  },
  {
    path: 'form',
    loadChildren: () => import('./form/form.module').then( m => m.FormPageModule)
  },
  {
    path: 'why',
    loadChildren: () => import('./why/why.module').then( m => m.WhyPageModule)
  },
  {
    path: 'form-step1',
    loadChildren: () => import('./form-step1/form-step1.module').then( m => m.FormStep1PageModule)
  },
  {
    path: 'home-new',
    loadChildren: () => import('./home-new/home-new.module').then( m => m.HomeNewPageModule)
  },  {
    path: 'form-lists',
    loadChildren: () => import('./form-lists/form-lists.module').then( m => m.FormListsPageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
