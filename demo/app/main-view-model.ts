import { Observable } from 'tns-core-modules/data/observable';
import { NsVideoPlayer } from 'nativescript-ns-video-player';

export class HelloWorldModel extends Observable {
  public message: string;
  private nsVideoPlayer: NsVideoPlayer;

  constructor() {
    super();

    this.nsVideoPlayer = new NsVideoPlayer();
    this.message = this.nsVideoPlayer.message;
  }
}
