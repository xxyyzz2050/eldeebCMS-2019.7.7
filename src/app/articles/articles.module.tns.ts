import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { ArticlesRoutingModule } from './articles-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { ArticleComponent } from './article/article.component';
import { IndexComponent } from './index/index.component';
import { ManageComponent } from './manage/manage.component';

@NgModule({
  declarations: [ArticleComponent, IndexComponent, ManageComponent],
  imports: [ArticlesRoutingModule, NativeScriptCommonModule],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ArticlesModule {}
