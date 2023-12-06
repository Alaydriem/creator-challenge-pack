"use strict";

import { world, system } from "@minecraft/server";
import { Events } from "./events";
import { Version } from "./version";

let active_timer;

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
        case "round-em-up":
          system.run(() => {
            ch.saddle_up();
          });
          break;
        default:
          break;
      }
      break;
    // Starts a new timer with a set difficulty
    case "!start-timer":
      event.cancel = true;
      system.run(() => {
        active_timer = ch.timer(
          cmd[1] ?? 10, // The default interval
          cmd[2] ?? "m", // In minutes
          cmd[3] ?? "0", // The time to start the day at
          cmd[4] ?? "hard" // The difficulty
        );
      });
      break;
    // Clears the current timer, if there is one
    case "!clear-timer":
      event.cancel = true;
      system.run(() => {
        ch.clear_timer(active_timer);
      });
      break;
    default:
      break;
  }
});
