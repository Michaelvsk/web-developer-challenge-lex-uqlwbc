import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { of } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { MockApiService } from "../mock-api.service";
import { IRequest, RequestStatus } from "../model";

@Component({
  selector: "app-request-detail",
  templateUrl: "./request-detail.component.html",
  styleUrls: ["./request-detail.component.css"]
})
export class RequestDetailComponent implements OnInit {
  formGroup: FormGroup;
  statusOptions = Object.keys(RequestStatus);

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private mockApi: MockApiService,
    private route: ActivatedRoute
  ) {
    this.formGroup = formBuilder.group({
      id: new FormControl(null),
      start: new FormControl(null, [Validators.required]),
      end: new FormControl(null, [Validators.required]),
      status: new FormControl(null, [Validators.required]),
      remark: new FormControl(null)
    });
  }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        map(params => params.get("id")),
        switchMap(id => {
          if (id) {
            return this.mockApi.getRequestById(Number.parseInt(id));
          }
          return of({
            id: null,
            start: null,
            end: null,
            remark: null,
            status: RequestStatus.requested
          });
        })
      )
      .subscribe(request => this.formGroup.setValue(request));
  }

  onSubmit(formGroupValue: IRequest) {
    console.log(formGroupValue);
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }
    if (formGroupValue.id) {
      this.updateRequest(formGroupValue);
    } else {
      this.createRequest(formGroupValue);
    }
  }

  private createRequest(request: IRequest) {
    this.mockApi.createRequest(request).subscribe(
      result => {
        // Handle result
        alert(`Request ${result.id} created`);
        console.log(result);
      },
      error => {
        // Handle error
        alert(error);
      },
      () => {
        // 'onCompleted' callback.
        this.router.navigate(["/list"]);
      }
    );
  }

  private updateRequest(request: IRequest) {
    this.mockApi.updateRequest(request).subscribe(
      result => {
        // Handle result
        alert(`Request ${result.id} updated`);
        console.log(result);
      },
      error => {
        // Handle error
        alert(error);
      },
      () => {
        // 'onCompleted' callback.
        this.router.navigate(["/list"]);
      }
    );
  }
}
