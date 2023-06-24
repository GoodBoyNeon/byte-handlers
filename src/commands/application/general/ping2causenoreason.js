import { ApplicationCommandOptionType } from "discord.js";
// option names cannot contain spaces and i cant type bruh
const ping2causenoreason = {
  name: "ping2causenoreason",
  description: "hi",

  // here you define options as an array with their own opts
  options: [
    {
      name: "first",
      description: "first option is a required string",
      type: ApplicationCommandOptionType.String,
      required: true,
    },
    {
      name: "second",
      description: "second option will be a user mention",
      type: ApplicationCommandOptionType.User,
      required: false,
    },
  ],

  run: async ({ interaction, options }) => {
    const firstOption = options.getString("first");
    const secondOption = options.getUser("second");

    interaction.followUp({
      content: `first option: ${firstOption}\nsecondoption: ${secondOption}`,
    });
  },
};

export default ping2causenoreason;
