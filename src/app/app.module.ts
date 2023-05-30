import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { RequestListComponent } from "./request-list/request-list.component";
import { RequestDetailComponent } from "./request-detail/request-detail.component";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatSortModule } from "@angular/material/sort";
import { MatTooltipModule } from "@angular/material/tooltip";

import { MockApiService } from "./mock-api.service";
import { MatNativeDateModule } from "@angular/material/core";

const MATERIAL_MODULES = [
  MatButtonModule,
  MatTableModule,
  MatGridListModule,
  MatCardModule,
  MatToolbarModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTooltipModule,
  MatNativeDateModule
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ...MATERIAL_MODULES,
    RouterModule.forRoot([
      { path: "", pathMatch: "full", redirectTo: "list" },
      { path: "list", component: RequestListComponent },
      { path: "new", component: RequestDetailComponent },
      { path: "edit/:id", component: RequestDetailComponent }
    ])
  ],
  declarations: [AppComponent, RequestListComponent, RequestDetailComponent],
  bootstrap: [AppComponent],
  providers: [MockApiService]
})
export class AppModule {}
