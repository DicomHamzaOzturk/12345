import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',

  styles: [
    `
      .online {
        color: white;
      }
    `,
  ],
})
export class ServersComponent implements OnInit {
  serverName = 'Server123';
  serverID: number = 10;
  serverStatus: string = 'Online';
  allowNewServer = true;
  serverCreated = false;
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
