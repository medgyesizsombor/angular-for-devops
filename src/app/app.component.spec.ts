import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('isPrime(-4) function', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({ number: -4 })
          }
        }
      ]
    }).compileComponents();
  });

  it('should write that -4 is not a prime number', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    fixture.detectChanges();

    expect(app.text).toBe('-4 is not a prime number because it is a negative number.');
  });

  it('should return false', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    fixture.detectChanges();

    expect(app.isPrime('-4')).toBeFalsy();
  });
});

describe("isPrime('teszt') function", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({ number: 'teszt' })
          }
        }
      ]
    }).compileComponents();
  });

  it('should write that teszt is not a number', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    fixture.detectChanges();

    expect(app.text).toBe('teszt is not a number.');
  });

  it('should return false', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    fixture.detectChanges();

    expect(app.isPrime('teszt')).toBeFalsy();
  });
});

describe('isPrime(1) function', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({ number: 1 })
          }
        }
      ]
    }).compileComponents();
  });

  it('should write that 1 is not a prime number', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    fixture.detectChanges();

    expect(app.text).toBe('1 is not a prime number.');
  });

  it('should return false', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    fixture.detectChanges();

    expect(app.isPrime('1')).toBeFalsy();
  });
});

describe('isPrime(6) function', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({ number: 6 })
          }
        }
      ]
    }).compileComponents();
  });

  it('should write that 6 is not a prime number', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    fixture.detectChanges();

    expect(app.text).toBe('6 is not a prime number because it is divisible by 2');
  });

  it('should return false', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    fixture.detectChanges();

    expect(app.isPrime('6')).toBeFalsy();
  });
});

describe('isPrime(3)', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({ number: 3 })
          }
        }
      ]
    }).compileComponents();
  });

  it('should write that 3 is a prime number', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    fixture.detectChanges();

    expect(app.text).toBe('3 is a prime number! :)');
  });

  it('should return true', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    fixture.detectChanges();

    expect(app.isPrime('3')).toBeTruthy();
  });
});
