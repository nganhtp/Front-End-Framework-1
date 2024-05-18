import {NgModule} from '@angular/core';
import {NbMenuModule} from "@nebular/theme";
import {ThemeModule} from '../@theme/theme.module';

import {PagesComponent} from './pages.component';
import {DashboardModule} from './dashboard/dashboard.module';
import {PagesRoutingModule} from './pages-routing.module';
import {PaginatorModule} from "../@theme/components/paginator/paginator.module";
import { ManageComponent } from './manage/manage.component';
import { PlusComponent } from './plus/plus.component';
import { ManageNVComponent } from './manage-nv/manage-nv.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    NbMenuModule,
    PaginatorModule,
  ],
  declarations: [
    PagesComponent,
    ManageComponent,
    PlusComponent,
    ManageNVComponent,
  ],
  providers: []
})
export class PagesModule { }
