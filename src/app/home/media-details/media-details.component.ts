import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'media-details',
  templateUrl: './media-details.component.html',
  styleUrls: ['./media-details.component.scss']
})
export class MediaDetailsComponent implements OnInit {
  @Input("links") links=[];
  constructor(private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
  }
  photoURL(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  getLinks(){
    return this.links.filter(item=> typeof item ==="string" && item.includes("http")).map(item=>item.replace("watch?v=", "embed/"));
  }
}
