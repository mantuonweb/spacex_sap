import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { StoreModule } from "@ngrx/store";
import * as fromHome from "./store/reducers/home.reducer";
import { EffectsModule } from "@ngrx/effects";
import { HomeEffects } from "./store/effects/home.effects";
import { HomeService } from "./services/home.service";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { CommonComponentsModule } from "../components/component.module";
import { LaunchDetailsComponent } from './launch-details/launch-details.component';
import { MediaDetailsComponent } from './media-details/media-details.component';

@NgModule({
  providers: [HomeService],
  declarations: [HomeComponent, LaunchDetailsComponent, MediaDetailsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    // ng generate @ngrx/schematics:feature home/store/Home -m home/home.module.ts --group
    StoreModule.forFeature(fromHome.homeFeatureKey, fromHome.reducer),
    EffectsModule.forFeature([HomeEffects]),
    CommonComponentsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  entryComponents: []
})
export class HomeModule {}
