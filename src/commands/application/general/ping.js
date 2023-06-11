const ping = {
  name: "pingabcdefg",
  description: "the name IS NOT WEIRD, OKAY?",
  run: async ({ interaction }) => {
    interaction.followUp("Hi!");
  },
};

export default ping;
