import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { FormsModule} from '@angular/forms';
import { AurevoirService } from './aurevoir.service';


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [AurevoirService],
  bootstrap: [AppComponent]
})
export class AppModule { }
