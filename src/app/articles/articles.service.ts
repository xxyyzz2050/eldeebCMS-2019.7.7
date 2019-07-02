import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { baseUrl } from "config";
import { types } from "./types";
import env from "env";

@Injectable({
  providedIn: "root"
})
export class ArticlesService {
  constructor(private http: HttpClient) {
    console.log("== service/env ==", env);
  }

  /**
   * sends a request to /server.ts (express) witch will trigger GetArticlesAPI.getArticle()
   * @method request
   * @param  url     [description]
   * @return [description]
   */
  request(url): any {
    console.log("== baseUrl ==", baseUrl);

    // todo: Observable<...>

    return this.http.get<types.Article | types.Post[]>(
      `${baseUrl}articles/api/${url}`
      // todo: dynamically get the current domain
    );
  }
}
