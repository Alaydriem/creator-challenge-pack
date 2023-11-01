"use strict";

const VERSION = "23.11.3";

export class Version {
  constructor(event, player) {
    this.event = event;
    this.player = player;
  }

  version(version) {
    this.player.onScreenDisplay.setActionBar(VERSION);
  }
}
