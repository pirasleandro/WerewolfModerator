/**
 * @typedef { 'lynched'|'heartbreak'|Role } CauseOfDeath
 */

/**
 * @type {Role[]}
 */
const werWoelfeVonDuesterNacht = [
  new Role('Villager', Team.villagers),
  new Role('Werewolf', Team.werewolves),
  new Role('Seer', Team.villagers, new Mechanics('daily', () => {
    const player = choosePlayer();
    console.log(player.role)
  }))
];

export class Werewolf {
  /**
   * @param {{ [string]: Role }} players 
   * @param {Role[]} roles 
   */
  constructor(players, roles = werWoelfeVonDuesterNacht) {
    this.players = players;
    this.roles = roles;
  }

  start() {
    this.players['Sandro']
    // TODO
  }

  /**
   * @returns {Player}
   */
  choosePlayer() {
    // TODO
    return null;
  }
}

const Team = {
  villagers: Symbol('villagers'),
  werewolves: Symbol('werewolves'),
  singlePlayer: Symbol('singlePlayer'),
  other: Symbol('other')
}

class Role {
  /**
   * @param {string} name 
   * @param {Team} team 
   * @param {Mechanics} mechanics
   */
  constructor(name, team, mechanics) {
    this.name = name;
    this.team = team;
    this.mechanics = mechanics;
  }
}

class Mechanics {
  /**
   * @param {'never'|'firstNight'|'daily'} awakes 
   * @param {() => void} onAwake 
   * @param {(causeOfDeath: CauseOfDeath) => void} onDeath 
   */
  constructor(awakes, onAwake, onDeath) {
    this.awakes = awakes;
    this.onAwake = onAwake;
    this.onDeath = onDeath;
  }
}