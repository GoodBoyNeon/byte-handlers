import { config } from "../config.js";
import { hasPermissions } from "../lib/hasPermissions.js";

const { prefix } = config;
const handleMessageCommands = (message, client) => {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const commandName = args.shift();
  const command = client.messageCommands.get(commandName);

  const { defaultPermissions } = command;
  if (defaultPermissions) {
    const hasPerms = hasPermissions(
      message.member.permissions.toArray(),
      defaultPermissions
    );
    if (!hasPerms) {
      // TODO: Convert this to an embed
      message.reply(
        "You do not have sufficient permissions to run this command"
      );
      return;
    }
  }

  const props = {
    client,
    message,
    args,
  };
  command.run(props);
};

const messageCreate = {
  name: "messageCreate",

  run: (message, client) => {
    const mention = `<@${client.id}>`;
    const isCommand =
      message.content.startsWith(prefix) || message.content.startsWith(mention);

    if (isCommand) {
      handleMessageCommands(message, client);
    }
  },
};

export default messageCreate;
