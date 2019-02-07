import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NavheaderComponent } from './common/uicomponents/navheader/navheader.component';
import { FooterComponent } from './common/uicomponents/footer/footer.component'



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,  
    ContactusComponent,     
    NavheaderComponent, FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
