const perm = {
  name: "perm",

  run: async ({ message }) => {
    const perms = message.member.permissions.toArray();

    message.reply(`${perms.join("\n")}`);
  },
};

export default perm;
