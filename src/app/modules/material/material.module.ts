import { NgModule } from '@angular/core';
import { MatButtonModule} from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";

const MaterialComponents = [
  MatButtonModule,
  MatButtonToggleModule,
  MatInputModule,
  MatSelectModule,
  MatFormFieldModule];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
