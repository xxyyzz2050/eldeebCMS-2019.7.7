import { types } from './types'; // to use /// <reference path="./types.ts"/> remove export from ./types-> export namespace types{}

export class ArticlesAPI {
  /* link=/{{site=articles|jobs|.../}}($category/$link-title/)/{{type=category|article}}-{{ObjectId}}
   or /shortId  --> {{type=article|category}}-{{id}}
*/
  get(url: string): Promise<any> {
    // todo: Observable<types.article | types.post[]>
    return new Promise(r => r(this.fetchData(this.getParts(url))));
  }

  private getParts(url: string): types.Parts {
    // url= {type}-{id}
    return { type: 'article', id: 1 };
  }

  // todo: cache(type/id, ()=>db.get()); edeeb/db-mongoDB, eldeeb/files->cache()
  // todo: return schema.article | schema.article[]
  private fetchData(parts: types.Parts) {
    console.log('== fetchdata #1 ==');
    const data = {
      test: 1,
      title: 'article title',
      subtitle: 'article sub-title',
      content: '=========== content ============',
      author: { name: ['first', 'last'], img: 'assets/test/avatar.jpg' },
      img: 'assets/test/post-image.jpg'
    };
    return data; // todo: return real data from database
  }
}
