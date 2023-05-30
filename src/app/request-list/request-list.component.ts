import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MockApiService } from '../mock-api.service';
import { IRequest } from '../model';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css'],
})
export class RequestListComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'start',
    'end',
    'status',
    'remark',
    'edit',
    'delete',
  ];
  dataSource: IRequest[];

  constructor(private mockApi: MockApiService) {}

  ngOnInit() {
    this.mockApi
      .getAllRequests()
      .subscribe((requests) => (this.dataSource = [...requests]));
  }

  public deleteRequest(id: number) {
    this.mockApi.deleteRequest(id).subscribe(
      (result) => {
        // Handle result
        alert(`request ${id} deleted`);
        console.log(result);
      },
      (error) => {
        // Handle error
        alert(error);
      },
      () => {
        // 'onCompleted' callback.
      }
    );
  }

  public rotateDown(): void {
    alert('rotate down called');
  }

  public rotateUp(): void {
    alert('rotate up called');
  }
}
