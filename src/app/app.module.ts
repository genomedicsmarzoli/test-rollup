import {NgModule} from '@angular/core';
import chroma from 'chroma-js';

@NgModule({
  declarations: [],
  bootstrap: [], imports: []
})
export class AppModule {
  externals = {

    'chroma-js': chroma,
  };

}
