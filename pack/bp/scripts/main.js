"use strict";

import { world, system } from "@minecraft/server";
import { Events } from "./events";
import { Version } from "./version";

world.beforeEvents.chatSend.subscribe(async (event) => {
  let ch = new Events(event, event.sender);
  let v = new Version(event, event.sender);
  let cmd = event.message.split(" ");
  switch (cmd[0]) {
    case "!version":
      event.cancel = true;
      system.run(() => {
        v.version();
      });
      break;
    case "!setup":
      event.cancel = true;
      switch (cmd[1]) {
        case "nether-mob-chop":
          system.run(() => {
            ch.nether_mob_chop(cmd[2] ?? "sword");
          });
          break;
        case "saddle-up":
          system.run(() => {
            ch.saddle_up();
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
