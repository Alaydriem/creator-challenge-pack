![YouTube Channel Subscribers](https://img.shields.io/youtube/channel/subscribers/UCXgqRZv7bHsKzwYBrtA9DFA?label=Youtube%20Subscribers&logo=Alaydriem&style=flat-square)

<div align="center">

  <h1>Minecraft Creator Challenge Pack</h1>

<a href="https://www.youtube.com/@Alaydriem"><img src="https://raw.githubusercontent.com/alaydriem/bedrock-material-list/master/docs/subscribe.png" width="140"/></a>

<a href= https://discord.gg/NMvmk9zKyP"><img src="https://raw.githubusercontent.com/alaydriem/creator-challenge-pack/master/pack/rp/pack_icon.png" width="140"/></a>

  <p>
    <strong>Behavior & Resource Pack for Minecraft Creator Challenges</strong>
  </p>
  <hr />
</div>

## Installation

Download the latest version of the pack from the Github [releases](https://github.com/Alaydriem/creator-challenge-pack/releases) page.

Make sure that you have the following experimental flags enabled:

- Holiday Creator Features
- Beta APIs
- Upcoming Creator Features

### Developing

If you're interested in adding a new challenge, or just tinkering with the pack:

1. Install the latest Rust toolchain if you don't already have it installed from https://www.rust-lang.org/tools/install

   ```
   curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
   ```

2. Clone this repository:

   ```
   git clone git@github.com:alaydriem/creator-challenge-pack
   ```

3. Run the development server. This will place the pack in your local Minecraft installation folder for `development_behavior_packs` and `development_resource_packs` -- assuming the default installation directory

   ```
   cargo run dev
   ```

4. If you want to publish a new version. Make sure you bump the version in cargo.yaml, then run

   ```
   cargo run package
   ```

## Timer

A new timer can be started by running the following in-game command:

```
!start-timer <minutes>
```

For example: `!start-timer 10` will start a 10 min timer, which will be displayed on the Action Bar of your HUD. The gamemode will be changed into survival, and the difficulty set to hard.

When the timer ends, the gamemode will be reset into peaceful to despawn all mobs.

## Challenges

The following challenges are available:

### Nether Mob Chop

Goal: Collect as many mob drops in 10 minutes as you can.

You can start this challenge by running:

```
!setup nether-mob-chop <sword|axe>
```

You'll immediately be given the following items and have them be equipped
(1) diamond sword or axe (player preference)
(1) golden T-shirt
(1) shield
(1) diamond pick
(64) golden carrots
(64) cobblestone

RULES:

1. Build a nether portal and light it
2. Toss away the flint and steel
3. Step through the portal.
4. Run `!start-timer 10` to start the challenge.
5. Collect as many nether mob drops as you can in 10 minutes.
6. If you die, the challenge is over.
7. After 10 minutes, tally up your score using the following system; First of each item scores 10 pts. Every other item scores 1 point.
   Example: you have 5 rotten flesh, 1 ghast tear and 2 bones. You would score 14 point for the flesh, 10 points for the tear and 11 points for the bones for a total of 35 points.
8. Exclusions: no trading allowed. No items from chests allowed. All items must come from combat.

9. All items must be in your inventory when the time runs out to be counted.
