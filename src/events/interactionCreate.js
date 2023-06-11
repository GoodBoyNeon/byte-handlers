import discordjs from "discord.js";
const { Interaction, CommandInteraction } = discordjs;
import { Byte } from "../lib/Byte.js";

/**
 *
 * @param {CommandInteraction} interaction
 * @param {Byte} client
 */
const handleApplicationCommands = async (interaction, client) => {
  await interaction.deferReply();

  const command = client.applicationCommands.get(interaction.commandName);

  const props = {
    client,
    interaction,
    options: interaction.options,
  };

  command.run(props);
};

const interactionCreate = {
  name: "interactionCreate",

  /**
   *
   * @param {Interaction} interaction
   * @param {Byte} client
   */
  run: (interaction, client) => {
    if (interaction.isChatInputCommand()) {
      handleApplicationCommands(interaction, client);
    }
  },
};

export default interactionCreate;
