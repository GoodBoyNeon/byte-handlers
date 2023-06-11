import { config } from "../config.js";

const { prefix } = config;
const handleMessageCommands = (message, client) => {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const commandName = args.shift();
  const command = client.messageCommands.get(commandName);
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
    console.log(message.content);
    const isCommand =
      message.content.startsWith(prefix) || message.content.startsWith(mention);

    if (isCommand) {
      handleMessageCommands(message, client);
    }
  },
};

export default messageCreate;
