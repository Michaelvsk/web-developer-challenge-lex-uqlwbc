export enum RequestStatus {
  requested = "requested",
  approved = "approved",
  rejected = "rejected",
  canceled = "canceled"
}

export interface IRequest {
  id: number;
  start: Date;
  end: Date;
  status: RequestStatus;
  remark: string;
}
