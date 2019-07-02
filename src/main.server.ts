import { enableProdMode } from "@angular/core";

import environment from "env";

if (environment.mode == "production") {
  enableProdMode();
}

export { AppServerModule } from "./app/app.server.module";
