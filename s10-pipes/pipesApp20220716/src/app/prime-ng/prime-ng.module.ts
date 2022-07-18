import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';
import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [],
  exports: [ButtonModule, CardModule, MenubarModule, FieldsetModule],
  imports: [],
})
export class PrimeNgModule {}
