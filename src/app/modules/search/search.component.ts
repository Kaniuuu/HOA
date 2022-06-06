import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AutoCompleteService } from './resources/services/auto-complete.service';
import { map, startWith } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchControl = new FormControl('');
  options: string[] = [];
  filteredOptions = this.searchControl.valueChanges.pipe(
    startWith(''),
    map((val) =>
      val
        ? this.options
            .filter((v) => v.toLowerCase().indexOf(val.toLowerCase()) === 0)
            .slice(0, 4)
        : []
    )
  );

  constructor(private autoComplete: AutoCompleteService) {}

  ngOnInit(): void {
    this.autoComplete.getAutoCompleteData().subscribe((val) => {
      this.options = val;
    });
  }

  search() {
    if (this.searchControl.value != '') {
      window.open(
        'https://www.google.com/search?q=' + this.searchControl.value,
        '_blank'
      );
    }
  }
}
