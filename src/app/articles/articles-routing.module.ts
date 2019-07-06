import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ArticleComponent } from './article/article.component';
import { ManageComponent } from './manage/manage.component';

const routes: Routes = [
  {
    path: 'manage',
    component: ManageComponent
  },
  {
    path: 'article',
    component: ArticleComponent
  },
  {
    path: '',
    component: IndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule {}
