import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {SearchService} from '../../search.service';
import {NgForm} from '@angular/forms';
import {GoogleResponse} from '../../Response.model';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  results: GoogleResponse;
  term;
  subs: Subscription[] = [];

  constructor(private location: Location,
              private searchService: SearchService) {
  }

  ngOnInit(): void {
    const {term} = history.state;
    this.term = term;
    // const {term} = this.location.getState();
    if (term) {
      this.subs.push(this.searchService.getSearchData(term).subscribe((data: GoogleResponse) => {
        this.results = data;
      }));
    }
  }


  search(form: NgForm): void {
    const {search_term} = form.value;
    this.term = search_term;
    this.subs.push(this.searchService.getSearchData(this.term).subscribe((data: GoogleResponse) => {
      this.results = data;
    }));
  }
}
