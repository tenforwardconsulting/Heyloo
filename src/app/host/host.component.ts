import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { HostService} from '../host.service';

@Component({
  selector: 'host-component',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.css'],
  providers: [HostService]
})
export class HostComponent {
  games: FirebaseListObservable<any[]>;
<<<<<<< HEAD

  constructor(private hostService: HostService) { }

  ngOnInit() {
    this.games = this.hostService.getGames();
  }

  createGame(){
    this.hostService.createGame();
  }
=======
>>>>>>> 6589ef9eda8878640f4d19594902d473ac2f220c

  constructor(private hostService: HostService) { }

  ngOnInit() {
    this.games = this.hostService.getGames();
  }

  createGame(){
    this.hostService.createGame();
  }
}
