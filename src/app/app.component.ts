import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  getUrlSub: Subscription | undefined;
  text: string | undefined;
  isLoading: boolean = false;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loadData();
  }

  /**
   * Load data
   */
  private loadData() {
    this.isLoading = true;
    this.getUrlSub = this.route.queryParams.subscribe((params: Params) => {
      this.isPrime(params['number']);
    });
  }

  /**
   * Check if the number is prime number
   */
  isPrime(number: number) {
    if (!number || isNaN(number)) {
      console.error('Please provide a number');
      return;
    }

    if (number < 0) {
      this.text = `${number} is not a prime number because it is a negative number.`;
      return false;
    }

    if (number === 1 || number === 0) {
      this.text = `${number} is not a prime number.`;
      return false;
    }

    let isPrime = true;
    const squaredNumber = Math.floor(Math.sqrt(number));
    console.log(squaredNumber);
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
