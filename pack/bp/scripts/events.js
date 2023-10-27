"use strict";

import { world, system } from "@minecraft/server";

export class Events {
  constructor(event, player) {
    this.event = event;
    this.player = player;
  }

  // Nether Mob Chop
  nether_mob_chop(weapon) {
    this.player.runCommand(
      'replaceitem entity "' +
        this.player.name +
        '"slot.weapon.mainhand 0 diamond_' +
        weapon
    );
    this.player.runCommand(
      'replaceitem entity "' +
        this.player.name +
        '"slot.weapon.offhand 0 shield'
    );
    this.player.runCommand(
      'replaceitem entity "' +
        this.player.name +
        '" slot.armor.chest 0 golden_chestplate'
    );

    const items = {
      golden_carrot: 64,
      diamond_pickaxe: 1,
      cobblestone: 64,
      obsidian: 12,
      flint_and_steel: 1,
    };
    this.give_player_items(items);
  }

  saddle_up() {
    this.player.runCommand(
      'replaceitem entity "' + this.player.name + '"slot.armor.chest 0 elytra'
    );

    const items = {
      oak_log: 64,
      lead: 64,
      firework_rocket: 128,
      bread: 64,
      carrot_on_a_stick: 1,
      oak_fence: 64,
      fence_gate: 64,
      oak_boat: 1,
      saddle: 15,
    };

    this.give_player_items(items);
  }

  give_player_items(items) {
    Object.entries(items).forEach((entry) => {
      const [item, amount] = entry;
      this.player.runCommand(
        'give "' + this.player.name + '" ' + item + " " + amount
      );
    });
  }

  timer(time) {
    let main_clock = time * 60;
    this.player.runCommand("difficulty hard");
    this.player.runCommand("gamemode survival");
    this.player.runCommand("time set 0");

    const this_thing = this;
    const intervalId = system.runInterval((e) => {
      if (main_clock == 0) {
        this.player.onScreenDisplay.setTitle("Challenge Over!", {
          stayDuration: 200,
          fadeInDuration: 2,
          fadeOutDuration: 4,
          subtitle: "Tally your score!",
        });

        this.player.onScreenDisplay.setActionBar("00:00");

        this.player.runCommand("difficulty peaceful");
        this.player.onScreenDisplay.setActionBar("");
        return system.clearRun(intervalId);
      }

      this.player.onScreenDisplay.setActionBar(this_thing.toHHMMSS(main_clock));

      main_clock = main_clock - 1;
    }, 20);

    return intervalId;
  }

  toHHMMSS(time) {
    var sec_num = parseInt(time, 10); // don't forget the second param
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - hours * 3600) / 60);
    var seconds = sec_num - hours * 3600 - minutes * 60;

    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (hours == 0) {
      return minutes + ":" + seconds;
    } else {
      return hours + ":" + minutes + ":" + seconds;
    }
  }
}
