import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { FullScreenMenuComponent } from './animations/menus/full-screen-menu/full-screen-menu.component';
import { SplitHeaderComponent } from './animations/headers/split-header/split-header.component';
import { TextSparklesComponent } from './animations/text/text-sparkles/text-sparkles.component';
import { StaggeredGridComponent } from './animations/headers/staggered-grid/staggered-grid.component';
import { LightHoverComponent } from './animations/cards/light-hover/light-hover.component';
import { TwitchCardComponent } from './animations/cards/twitch-card/twitch-card.component';
import { ElegantMenuComponent } from './animations/menus/elegant-menu/elegant-menu.component';
import { SmartMouseComponent } from './animations/mouse-trailers/smart-mouse/smart-mouse.component';
import { HoverButtonsComponent } from './animations/buttons/hover-buttons/hover-buttons.component';
import { WavyLoaderComponent } from './animations/loaders/wavy-loader/wavy-loader.component';
import { MoviesGalleryComponent } from './animations/carousels/movies-gallery/movies-gallery.component';
import { FluidFlexComponent } from './animations/layouts/fluid-flex/fluid-flex.component';
import { DarkModeTogglerComponent } from './animations/buttons/dark-mode-toggler/dark-mode-toggler.component';
import { FilterCardComponent } from './animations/carousels/filter-card/filter-card.component';
import { TextComponent } from './animations/inputs/text/text.component';
import { ClampComponent } from './animations/layouts/clamp/clamp.component';
import { ChecklistComponent } from './animations/inputs/checklist/checklist.component';

const routes: Routes = [
  {
    path: "",
    component: LandingComponent
  },
  {
    path: "light-hover",
    component: LightHoverComponent
  },
  {
    path: "full-screen-menu",
    component: FullScreenMenuComponent
  },
  {
    path: "split-header",
    component: SplitHeaderComponent
  },
  {
    path: "twitch-card",
    component: TwitchCardComponent
  },
  {
    path: "magic-sparkles",
    component: TextSparklesComponent
  },
  {
    path: "elegant-menu",
    component: ElegantMenuComponent
  },
  {
    path: "staggered-grid",
    component: StaggeredGridComponent
  },
  {
    path: "smart-mouse",
    component: SmartMouseComponent
  },
  {
    path: "buttons-hover",
    component: HoverButtonsComponent
  },
  {
    path: "wavy-loader",
    component: WavyLoaderComponent
  },
  {
    path: "movies-gallery",
    component: MoviesGalleryComponent
  },
  {
    path: "fluid-flex-layout",
    component: FluidFlexComponent
  },
  {
    path: "dark-mode-toggler",
    component: DarkModeTogglerComponent
  },
  {
    path: "filter-card",
    component: FilterCardComponent
  },
  {
    path: "inputs-text",
    component: TextComponent
  },
  {
    path: "clamp-layout",
    component: ClampComponent
  },  
  {
    path: "checklist",
    component: ChecklistComponent
  },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
