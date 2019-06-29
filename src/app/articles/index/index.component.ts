import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'articles-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: [ArticlesService]
})
export class IndexComponent implements OnInit {
  articles; // todo: = new Observable<types.Articles>
  constructor(private getArticle: ArticlesService) {}

  ngOnInit() {
    // or use this.article=..request(), and in template {{article | async | json}}
    this.getArticle.request('article/1').subscribe(data => {
      console.log('Data: ', data);
      this.articles = new Array(10).fill(data);
    });
  }
}
