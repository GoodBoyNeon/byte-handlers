import { readdirSync } from "fs";
import { client } from "../index.js";
import { importDefault } from "../helpers/importDefault.js";

const ENVIRONMENT = process.env.NODE_ENV;
const DEV_GUILD_ID = process.env.DEV_GUILD_ID;

const getApplicationCommands = async () => {
  const commands = new Array();
  const baseDirPath = `./src/commands/application`;
  const commandFolders = readdirSync(baseDirPath);

  for (const folder of commandFolders) {
    const commandFiles = readdirSync(`${baseDirPath}/${folder}`).filter((f) =>
      f.endsWith(".js")
    );

    for (const commandFile of commandFiles) {
      const command = await importDefault(
        `../commands/application/${folder}/${commandFile}`
      );
      commands.push(command);
      client.applicationCommands.set(command.name, command);
    }
    return commands;
  }
};

const registerMessageCommands = async () => {
  const baseDirPath = `./src/commands/message`;
  const commandFolders = readdirSync(baseDirPath);

  for (const folder of commandFolders) {
    const commandFiles = readdirSync(`${baseDirPath}/${folder}`).filter((f) =>
      f.endsWith(".js")
    );

    for (const commandFile of commandFiles) {
      const command = await importDefault(
        `../commands/message/${folder}/${commandFile}`
      );

      client.messageCommands.set(command.name, command);
    }
  }
};

const registerApplicationCommands = async () => {
  const commands = await getApplicationCommands();

  if (ENVIRONMENT == "dev") {
    const guild = client.guilds.cache.get(DEV_GUILD_ID);

    if (!guild) {
      console.log("Dev guild doesn't exist!");
      return;
    }

    await guild.commands.set(commands);
  }
};

export const registerCommands = async (
  { message, application } = { message: true, application: true }
) => {
  if (application) await registerApplicationCommands();
  if (message) registerMessageCommands();
};
