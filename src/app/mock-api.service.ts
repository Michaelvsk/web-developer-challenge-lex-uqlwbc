import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import { RequestStatus, IRequest } from "./model";

@Injectable()
export class MockApiService {
  private requests: IRequest[] = [
    {
      id: 1,
      start: new Date("2020-12-31T23:00:00.000Z"),
      end: new Date("2021-01-04T23:00:00.000Z"),
      status: RequestStatus.approved,
      remark: null
    },
    {
      id: 2,
      start: new Date("2021-01-27T23:00:00.000Z"),
      end: new Date("2021-01-27T23:00:00.000Z"),
      status: RequestStatus.approved,
      remark: "sick :-("
    },
    {
      id: 3,
      start: new Date("2021-02-04T23:00:00.000Z"),
      end: new Date("2021-02-09T23:00:00.000Z"),
      status: RequestStatus.approved,
      remark: "Oscar will represent me"
    },
    {
      id: 4,
      start: new Date("2021-02-10T23:00:00.000Z"),
      end: new Date("2021-02-10T23:00:00.000Z"),
      status: RequestStatus.canceled,
      remark: "Sorry, typo - request canceled"
    },
    {
      id: 5,
      start: new Date("2021-07-19T23:00:00.000Z"),
      end: new Date("2021-07-29T23:00:00.000Z"),
      status: RequestStatus.requested,
      remark: null
    },
    {
      id: 6,
      start: new Date("2021-12-22T23:00:00.000Z"),
      end: new Date("2021-12-30T23:00:00.000Z"),
      status: RequestStatus.requested,
      remark: "Merry Christmas!"
    },
    {
      id: 7,
      start: new Date("2021-09-30T23:00:00.000Z"),
      end: new Date("2021-10-01T23:00:00.000Z"),
      status: RequestStatus.rejected,
      remark:
        "Sorry, I have to reject this one. Let's talk about this in our all hands call tomorrow"
    }
  ];

  private get nextId() {
    return Math.max(...this.requests.map(r => r.id)) + 1;
  }

  public getAllRequests(): Observable<IRequest[]> {
    console.log("MockApiService.getAllRequests called");
    return of(this.requests);
  }

  public getRequestById(id: number): Observable<IRequest> {
    console.log("MockApiService.getRequestById called");
    return of(this.requests.find(i => i.id === id));
  }

  public updateRequest(requestToUpdate: IRequest): Observable<IRequest> {
    console.log("MockApiService.updateRequest called");
    const index = this.requests.findIndex(r => r.id === requestToUpdate.id);
    if (index < 0) {
      return throwError(`NOT FOUND Id ${requestToUpdate.id}`);
    }
    const overlappingRequestIds = this.getOverlappingRequestIds(
      requestToUpdate
    );
    if (overlappingRequestIds.length > 0) {
      return throwError(
        `BAD REQUEST The following already existing requests fall within the requested period: ${overlappingRequestIds.join(
          ", "
        )}`
      );
    }
    this.requests[index] = requestToUpdate;
    return of(requestToUpdate);
  }

  public createRequest(requestToCreate: IRequest): Observable<IRequest> {
    console.log("MockApiService.createRequest called");
    const request = { ...requestToCreate, id: this.nextId };
    const overlappingRequestIds = this.getOverlappingRequestIds(
      requestToCreate
    );
    if (overlappingRequestIds.length > 0) {
      return throwError(
        `BAD REQUEST The following already existing requests fall within the requested period: ${overlappingRequestIds.join(
          ", "
        )}`
      );
    }
    this.requests.push(request);
    return of(request);
  }

  public deleteRequest(idToDelete: number): Observable<boolean> {
    console.log("MockApiService.deleteRequest called");
    const index = this.requests.findIndex(r => r.id === idToDelete);
    if (index < 0) {
      return throwError(`NOT FOUND Id ${idToDelete}`);
    }
    const requestToDelete = this.requests[index];
    if (!this.checkStatus(requestToDelete)) {
      return throwError(
        `BAD REQUEST You are not allowed to delete a request with status ${
          requestToDelete.status
        }`
      );
    }
    this.requests.splice(index, 1);
    return of(true);
  }

  public checkStatus(requestToCheck: IRequest): boolean {
    return true;
  }

  public getOverlappingRequestIds(requestToCheck: IRequest): number[] {
    return [];
  }
}
