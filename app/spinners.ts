import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpinnerComponent } from './spinner/spinner.component'
import { RotatingPlaneComponent } from './spinner/rotating-plane.component'
import { DoubleBounceComponent } from './spinner/double-bounce.component'
import { WaveComponent } from './spinner/wave.component'
import { WanderingCubesComponent } from './spinner/wandering-cubes.component'
import { PulseComponent } from './spinner/pulse.component'
import { ChasingDotsComponent } from './spinner/chasing-dots.component'
import { CircleComponent } from './spinner/circle.component'
import { ThreeBounceComponent } from './spinner/three-bounce.component'
import { CubeGridComponent } from './spinner/cube-grid.component'
import { WordPressComponent } from './spinner/word-press.component'
import { FadingCircleComponent } from './spinner/fading-circle.component'
import { FoldingCubeComponent } from './spinner/folding-cube.component'

export {
  SpinnerComponent,
  RotatingPlaneComponent,
  DoubleBounceComponent,
  WaveComponent,
  WanderingCubesComponent,
  PulseComponent,
  ChasingDotsComponent,
  CircleComponent,
  ThreeBounceComponent,
  CubeGridComponent,
  WordPressComponent,
  FadingCircleComponent,
  FoldingCubeComponent
};

const NG_SPIN_KIT_COMPONENTS = [
  SpinnerComponent,
  RotatingPlaneComponent,
  DoubleBounceComponent,
  WaveComponent,
  WanderingCubesComponent,
  PulseComponent,
  ChasingDotsComponent,
  CircleComponent,
  ThreeBounceComponent,
  CubeGridComponent,
  WordPressComponent,
  FadingCircleComponent,
  FoldingCubeComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: NG_SPIN_KIT_COMPONENTS,
  exports: NG_SPIN_KIT_COMPONENTS,
})
export class NgSpinKitModule {}
