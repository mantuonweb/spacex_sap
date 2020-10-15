import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'spx-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.scss']
})
export class LaunchComponent implements OnInit {
  loading = true

  @Input("launch") launch:any
  constructor() { }

  ngOnInit() {
  }
  onLoad(){
    this.loading = false;
  }
}
