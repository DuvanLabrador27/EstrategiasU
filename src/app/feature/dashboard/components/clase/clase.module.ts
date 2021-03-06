import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClaseRoutingModule } from './clase-routing.module';
import { CrearClaseComponent } from './crear-clase/crear-clase.component';
import { ListarClaseComponent } from './listar-clase/listar-clase.component';
import { ClaseComponent } from './clase/clase.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClaseHttpService } from './shared/service/clase-http.service';


@NgModule({
  declarations: [
    CrearClaseComponent,
    ListarClaseComponent,
    ClaseComponent
  ],
  exports: [
    CrearClaseComponent,
    ListarClaseComponent,
    ClaseComponent
  ],
  imports: [
    CommonModule,
    ClaseRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ClaseHttpService]
})
export class ClaseModule { }
