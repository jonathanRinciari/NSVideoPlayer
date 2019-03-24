import { Common } from './ns-video-player.common';
import { View } from 'tns-core-modules/ui/core/view';

export class NsVideoPlayer extends UIViewController {
  player: any;

  viewDidLoad() {
    this.player = Player.alloc();
    this.player.playerDegate = this;
    this.player.playbackDelegate = this;
    this.player.view.frame = UIScreen.mainScreen.bounds;
    rootVc().addChildViewController(this.player);
    this.view.addSubview(this.player.view);
    this.player.didMove(this);
  }


}

const rootVc = () => {
  let appWindow = UIApplication.sharedApplication.keyWindow;
  return appWindow.rootViewController;
}
