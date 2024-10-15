import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ActivatedRoute } from '@angular/router';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({

      imports: [AppComponent, ActivatedRoute],
      providers: [
        {provide: ActivatedRoute, userValiu: {

        }}
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});

// describe('isPrime(number) function', () => {
//   let fixture: ComponentFixture<AppComponent>;
//   let componentInstance: AppComponent;
//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [AppComponent],
//     }).compileComponents();
//   });

//   fixture = TestBed.createComponent(AppComponent);
//   componentInstance = fixture.componentInstance;

//   it('should text be "0 is not a prime number."', () => {
//     expect(componentInstance.text).toEqual('0 is not a prime number.');
//   })
// })
