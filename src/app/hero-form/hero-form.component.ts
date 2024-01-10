import { Component } from '@angular/core';
import { Location } from '@angular/common';

import { Form } from '../form';


@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

  constructor(private location: Location) { }
  goBack(): void {
    this.location.back();
  }

  title = "Hero User Form";

  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  model = new Form(18, 'Zain Asif', this.powers[0], 'Chuckles');

  submitted = false;

  onSubmit() { this.submitted = true; }

  newHero() {
    this.model = new Form(42, '', '');
  }

}
