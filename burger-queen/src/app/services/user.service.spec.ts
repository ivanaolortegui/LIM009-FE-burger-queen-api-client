import { TestBed, fakeAsync } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";

import { UserService } from "./user.service";
import { HttpClientModule } from "@angular/common/http";


const fixtureData = [
  {
    userId: "1",
    email: "ivana@gmail.com",
    password: "$2a$10$u04HgHbJAureCDVa87m7A.NfG8S9izMV.GQerhuggj6v.pr/YKOfK"
  }
];

describe("UserService", () => {
  let userService: UserService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService],
      imports: [HttpClientTestingModule]
    });

    httpTestingController = TestBed.get(HttpTestingController);
    userService = TestBed.get(UserService);
  });
  afterEach(() => {
    httpTestingController.verify();
  });

  it("should be created", () => {
    expect(userService).toBeTruthy();
  });

  it("should be created", () => {
    const users= [
      {
        userId: "1",
        email: "ivana@gmail.com",
        password: "$2a$10$u04HgHbJAureCDVa87m7A.NfG8S9izMV.GQerhuggj6v.pr/YKOfK"
      }
    ];
    userService.getIdUsers().subscribe(resp => {
      expect(resp).toBe(users);
    });
    const req = httpTestingController.expectOne('http://localhost:3000/660/users');
    expect(req.request.method).toBe("GET");
    req.flush(users);
  });
});
