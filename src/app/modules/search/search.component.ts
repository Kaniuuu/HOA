import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AutoCompleteService } from './resources/services/auto-complete.service';
import { map, Observable, of, startWith } from 'rxjs';
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
        ? this.options.filter(
          (v) => v.toLowerCase().indexOf(val.toLowerCase()) === 0
        )
        : []
    )
  );
  constructor(private autoComplete: AutoCompleteService) {  }
  ngOnInit(): void {
    this.autoComplete.getAutoCompleteData().subscribe((val) => {
      this.options = val;
    });
  }
}
