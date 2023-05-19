import { Component, OnInit } from '@angular/core';
import { Pan } from '../pan';
import { PanService } from '../pan.service';

@Component({
  selector: 'app-pan-list',
  templateUrl: './pan-list.component.html',
  styleUrls: ['./pan-list.component.css']
})
export class PanListComponent implements OnInit{
  pan: Pan[]=[];
  
  constructor(private panService : PanService) {}

  ngOnInit(): void {
    this.getPan();
  }

  private getPan(){
    this.panService.getPanList().subscribe(data=> {
      this.pan = data;
    });
  }

 
}
