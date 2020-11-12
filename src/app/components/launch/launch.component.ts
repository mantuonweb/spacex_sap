import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'spx-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.scss']
})
export class LaunchComponent implements OnInit {
  loading = true

  @Input("launch") launch:any
  constructor(private router: Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
  }
  onLoad(){
    this.loading = false;
  }
  onClick(){
    // this.router.navigate(["/test"]);
    this.router.navigate([this.launch.guid],{relativeTo: this.activatedRoute});
  }
}
