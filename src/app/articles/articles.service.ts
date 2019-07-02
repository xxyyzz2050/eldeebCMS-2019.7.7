import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { baseUrl } from "config";
import { types } from "./types";

@Injectable({
  providedIn: "root"
})
export class ArticlesService {
  constructor(private http: HttpClient) {}

  /**
   * sends a request to /server.ts (express) witch will trigger GetArticlesAPI.getArticle()
   * @method request
   * @param  url     [description]
   * @return [description]
   */
  request(url): any {
    // todo: Observable<...>
    console.log("== baseUrl ==", baseUrl);
    return this.http.get<types.Article | types.Post[]>(
      `${baseUrl}articles/api/${url}`
      // todo: dynamically get the current domain
    );
  }
}
