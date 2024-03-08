import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',

  styles: [
    `
      .online {
        color: white;
      }
    `,
  ],
})
export class ServerComponent implements OnInit {
  serverName = 'Server123';
  serverID: number = 10;
  serverStatus: string = 'Online';
  allowNewServer = true;
  serverCreated = false;
  servers = ['TestServer', 'TestServer2']; // Add this line
  getServerStatus() {
    return this.serverStatus;
  }
  onCreatedServer() {
    this.serverCreated = true;
    this.serverStatus = 'Server was created!  name is ' + this.serverName;
  }
  constructor() {
    this.serverStatus = Math.random() > 0.9 ? 'Online' : 'Offline';
  }

  ngOnInit() {}

  getColor() {
    return this.serverStatus === 'Online' ? 'green' : 'red';
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
