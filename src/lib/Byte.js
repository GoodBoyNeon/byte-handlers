import "dotenv/config.js";
import { Client, Collection } from "discord.js";
import { handleEvents } from "./handleEvents.js";
import { registerCommands } from "./registerCommands.js";

export class Byte extends Client {
  constructor() {
    super({
      intents: ["Guilds", "GuildMembers", "GuildMessages", "MessageContent"],
    });

    this.applicationCommands = new Collection();
    this.messageCommands = new Collection();
  }

  async init() {
    await this.login(process.env.TOKEN);
    await handleEvents();
    await registerCommands();
  }
}
