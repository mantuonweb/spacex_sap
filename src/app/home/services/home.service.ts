import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { delay, map } from "rxjs/operators";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable()
export class HomeService {
  url = environment.url;
  constructor(private http: HttpClient) {}
  getCaurses(pageSize = 10, launch?: boolean, land?: boolean, year?: number) {
    let params = new HttpParams();
    // params = params.append('_page', 1);
    params = params.append("limit", pageSize.toString());
    if (launch != undefined) {
      params = params.append("launch_success", launch.toString());
    }
    if (land != undefined) {
      params = params.append("land_success", land.toString());
    }
    if (year != undefined) {
      params = params.append("launch_year", year.toString());
    }

    return this.http.get(`${this.url}`, { params }).pipe(
      map((launches: any[]) => {
        return launches.map(launch => {
          return this.mapToUIModel(launch, land);
        });
      })
    );
  }
  mapToUIModel(launch, land) {
    return {
      missionId: launch.mission_id,
      missionName: launch.mission_name,
      isSuccess: launch.launch_success,
      launchYear: launch.launch_year,
      icon: launch.links.mission_patch_small,
      launchLanding: Boolean(land || launch.launch_landing)
    };
  }
  saveCourse(course) {
    return of(course).pipe(delay(1000));
  }
  editCourse(course) {
    return of(course).pipe(delay(1000));
  }
}
