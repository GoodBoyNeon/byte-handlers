const hello = {
  name: "hello",

  run: async ({ message, args }) => {
    message.reply(`args: ${args.join(" ")}`);
  },
};

export default hello;
