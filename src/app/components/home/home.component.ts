import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {
  }

  search(form: NgForm): void {
    const {search_term} = form.value;
    this.router.navigateByUrl('/results', {state: {term: search_term}}).then();
  }

  ngOnInit(): void {
  }

}
