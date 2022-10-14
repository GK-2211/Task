import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';



const MaterialComponents: any[] | Type<any> | ModuleWithProviders<{}>=[MatButtonModule, MatTableModule]

@NgModule({
    imports: [MaterialComponents],
    exports : [MaterialComponents]
  })
  export class MaterialModule { }
  