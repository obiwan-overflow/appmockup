import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'home/announce-detail',
        loadChildren: () => import('../announce-detail/announce-detail.module').then(m => m.AnnounceDetailPageModule)
      },
      {
        path: 'signout',
        loadChildren: () => import('../signout/signout.module').then(m => m.SignoutPageModule)
      },
      {
        path: 'signin',
        loadChildren: () => import('../signin/signin.module').then(m => m.SigninPageModule)
      },
      {
        path: 'announce',
        loadChildren: () => import('../announce/announce.module').then(m => m.AnnouncePageModule)
      },
      {
        path: 'announce/announce-detail',
        loadChildren: () => import('../announce-detail/announce-detail.module').then(m => m.AnnounceDetailPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}