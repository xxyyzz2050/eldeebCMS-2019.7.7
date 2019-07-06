import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-manage",
  templateUrl: "./manage.component.html",
  styleUrls: ["./manage.component.css"]
})
export class ManageComponent implements OnInit {
  text;
  form: FormGroup = this.fb.group({
    editor: ""
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  onContentChanged(ev) {
    console.log(ev);
    this.text = ev;
  }
}
