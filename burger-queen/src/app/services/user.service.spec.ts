import { TestBed, fakeAsync } from '@angular/core/testing';
// import {MockBackend } from '@angular/http/testing'

import {UserService} from './user.service';
import { HttpClientModule } from '@angular/common/http';



describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers:[
      UserService
    ],
    imports: [  
       HttpClientModule ,
        
    ],
  }));

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });
});
