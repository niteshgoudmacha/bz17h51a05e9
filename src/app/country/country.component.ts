import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  countries;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getCountries().subscribe(d => {
      this.countries = d;
      
      // console.log('data = ', d);
    });
  }

}
