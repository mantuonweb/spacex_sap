import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LaunchComponent } from "./launch/launch.component";
import { LaunchesComponent } from "./launches/launches.component";
import { LaunchFilterComponent } from "./launch-filter/launch-filter.component";

@NgModule({
  providers: [],
  declarations: [LaunchComponent, LaunchesComponent, LaunchFilterComponent],
  imports: [CommonModule],
  exports: [LaunchComponent, LaunchesComponent, LaunchFilterComponent],
  entryComponents: []
})
export class CommonComponentsModule {}
