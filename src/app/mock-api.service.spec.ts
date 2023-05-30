import { TestBed, inject } from "@angular/core/testing";
import { MockApiService } from "./mock-api.service";

describe("MockApiService: CheckOverlappingTrips", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockApiService]
    });
  });

  it("should ...", inject([MockApiService], (service: MockApiService) => {
    expect(service).toBeTruthy();
  }));
});
