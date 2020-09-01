import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ControlContainer, NgForm} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  viewProviders: [{provide: ControlContainer, useExisting: NgForm}]  // To pass data from custom element to parent
})
export class SearchComponent implements OnInit {
  @Input() iconRight: string;
  @Input() currentTermValue: string;
  // @ts-ignore
  @ViewChild('icon') icon: ElementRef;

  constructor() {
  }


  ngOnInit(): void {
    console.log(this.currentTermValue);
  }

}
