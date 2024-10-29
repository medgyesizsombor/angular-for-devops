import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  getUrlSub: Subscription | undefined;
  text: string | undefined;
  isLoading = false;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.loadData();
  }

  ngOnDestroy() {
    this.getUrlSub?.unsubscribe();
  }

  /**
   * Load data
   */
  private loadData() {
    this.isLoading = true;
    this.getUrlSub = this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.isPrime(params['number']);
    });
  }

  /**
   * Check if the number is prime number
   */
  isPrime(numberFromParam: string) {
    const number = Number(numberFromParam);

    if (!number || isNaN(number)) {
      this.text = `${numberFromParam} is not a number.`;
      return false;
    }

    if (number < 0) {
      this.text = `${number} is not a prime number because it is a negative number.`;
      return false;
    }

    if (number === 1 || number === 0) {
      this.text = `${number} is not a prime number.`;
      return false;
    }

    const isPrime = true;
    const squaredNumber = Math.floor(Math.sqrt(number));
    for (let i = 2; i <= squaredNumber; i++) {
      if (number % i === 0) {
        this.text = `${number} is not a prime number because it is divisible by ${i}`;
        return false;
      }
    }

    this.text = `${number} is a prime number! :)`;
    return isPrime;
  }
}
