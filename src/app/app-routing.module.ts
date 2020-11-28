import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { FileuploadDetailsComponent } from './fileupload-details/fileupload-details.component';
import { FilesaveComponent } from './filesave/filesave.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'home' }
  },
  {
    path: 'file-details',
    component: FileuploadDetailsComponent,
    data: { title: 'File Details' }
  },
  {
    path:'fileupload',
    component:FileuploadComponent
    
  },
  {
    path:'filesave',
    component:FilesaveComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
