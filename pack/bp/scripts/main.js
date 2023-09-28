"use strict";

import { world, system } from "@minecraft/server";

import { Events } from "./events";

world.beforeEvents.chatSend.subscribe(async (event) => {
  let ch = new Events(event, event.sender);
  let cmd = event.message.split(" ");
  switch (cmd[0]) {
    case "!setup":
      event.cancel = true;
      switch (cmd[1]) {
        case "nether-mob-chop":
          system.run(() => {
            ch.nether_mob_chop(cmd[2] ?? "sword");
          });
          break;
        default:
          break;
      }
      break;
    case "!start-timer":
      event.cancel = true;
      system.run(() => {
        ch.timer(cmd[1] ?? 10);
      });
      break;
    default:
      break;
  }
});
