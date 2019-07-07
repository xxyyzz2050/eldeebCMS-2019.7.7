import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { MatCardModule } from "@angular/material/card";

<<<<<<< HEAD
import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticleComponent } from './article/article.component';
import { IndexComponent } from './index/index.component';
import { ManageComponent } from './manage/manage.component';
import { QuillModule } from 'ngx-quill';
=======
import { ArticlesRoutingModule } from "./articles-routing.module";
import { ArticleComponent } from "./article/article.component";
import { IndexComponent } from "./index/index.component";
import { ManageComponent } from "./manage/manage.component";
import { QuillModule } from "ngx-quill";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
>>>>>>> 517afeaf7eb0fd0d941555f37725b0f66b89440f

@NgModule({
  declarations: [ArticleComponent, IndexComponent, ManageComponent],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    HttpClientModule,
    MatCardModule,
<<<<<<< HEAD
    QuillModule.forRoot()
=======
    FormsModule,
    ReactiveFormsModule,
    QuillModule.forRoot({
      modules: {
        toolbar: [
          [
            { header: [false, 2, 3] },
            "bold",
            "italic",
            "underline",
            "strike",
            "clean"
          ],
          ["blockquote", "code-block"],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ script: "sub" }, { script: "super" }],
          [{ indent: "-1" }, { indent: "+1" }],
          [{ direction: "rtl" }],
          [{ size: ["small", false, "large", "huge"] }],
          [{ color: [] }, { background: [] }],
          [{ align: [] }],
          ["link", "image", "video", "emoji"]
        ]
      }
    })
>>>>>>> 517afeaf7eb0fd0d941555f37725b0f66b89440f
  ],
  providers: []
})
export class ArticlesModule {}
