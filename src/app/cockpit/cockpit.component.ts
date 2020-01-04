import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  newServerName: '';
  newServerContent: '';

  constructor() { }

  ngOnInit() {
  }

  onAddNewServer() {
    this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
  }

  onAddNewBlueprint() {
    this.blueprintCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
  }

}
