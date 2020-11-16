import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { setCurrentMission } from '../store/actions/home.actions';
import { State } from '../store/reducers/home.reducer';
import { getSelectedMission } from '../store/selectors/home.selectors';

@Component({
  selector: 'app-launch-details',
  templateUrl: './launch-details.component.html',
  styleUrls: ['./launch-details.component.scss']
})
export class LaunchDetailsComponent implements OnInit {
  rowData$:Observable<any>
  constructor(private store: Store<State>, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(({ params }: any) => {
      if (params.id) {
        this.store.dispatch(
          setCurrentMission({
            guid: params.id
          })
        );
      }
    });
    this.rowData$ = this.store.select(getSelectedMission).pipe(map(item => {
      let missileData = item.data;
      let { mission_name, links, details } = missileData;
      return {
        mission_name,
        links: [links.mission_patch, links.article_link, links.wikipedia, links.video_link, links.youtube_id, links.flickr_images],
        details
      }
    }));
  }

  ngOnInit(): void {
  }

}
