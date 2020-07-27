import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';

import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AutentificareComponent } from './autentificare/autentificare.component';
import { RegisterComponent } from './register/register.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSliderModule} from '@angular/material/slider';
import { HomeComponentComponent } from './home-component/home-component.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogAddContComponent } from './dialog-add-cont/dialog-add-cont.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { DialogEditUserComponent } from './dialog-edit-user/dialog-edit-user.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {ToolbarModule} from 'primeng/toolbar';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MatMenuModule} from '@angular/material/menu';


          //api


@NgModule({
  declarations: [
    AppComponent,
    AutentificareComponent,
    RegisterComponent,
    HomeComponentComponent,
    DialogAddContComponent,
    DialogEditUserComponent
  ],
  entryComponents: [DialogAddContComponent,DialogEditUserComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path:'login',
        component:AutentificareComponent
      },
      {
        path:'register',
        component:RegisterComponent
      },
      {
        path:'home',
        component:HomeComponentComponent
      }
    ]),
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSliderModule,
    MatSidenavModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    FormsModule,
    ToolbarModule,
    AccordionModule,
    MatToolbarModule,
    MatMenuModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
