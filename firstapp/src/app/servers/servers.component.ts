import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css',
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Testserver';
  serverStatus = 'offline';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  ngOnInit() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }
  onCreateServer() {
    this.serverCreationStatus =
      'Server was created! Name is ' + this.serverName;
  }
}
