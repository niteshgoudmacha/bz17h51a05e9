import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colors;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getColors().subscribe(d => {
      this.colors = d['data'];
      
      // console.log('data = ', d);
    });
  }

}
