import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatWindowComponent } from './components/chat-window/chat-window.component';
import { LoginComponent } from './components/login/login.component';
import { PeerComponent } from './components/peer/peer.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'peer',
    component: PeerComponent,
    children: [
      {
        path: 'chat',
        outlet: 'chatWindow',
        component: ChatWindowComponent,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
