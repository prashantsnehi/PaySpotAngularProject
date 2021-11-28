import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ToastrModule } from 'ngx-toastr';
import { DefaultComponent } from './default/default.component';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    HomeComponent,
    NavComponent,
    ContactComponent,
    AboutComponent,
    DefaultComponent,
    ToolbarComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    ToastrModule.forRoot({ 
      timeOut: 3000,
      positionClass: 'toast-top-center' ,
      preventDuplicates: true
    }),
    RouterModule,
    BsDropdownModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  exports: [
    HomeComponent,
    NavComponent,
    ContactComponent,
    AboutComponent,
    DefaultComponent,
    ToolbarComponent,
    FooterComponent
  ]
})
export class ComponentModule { }
