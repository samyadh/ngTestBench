import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngtb-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  title = 'ngTestBench';
  constructor() {}

  ngOnInit(): void {}
}
