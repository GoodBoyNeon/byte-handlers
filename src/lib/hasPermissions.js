// @ts-check

/**
 *
 * @param {Array<string>} userPermissions
 * @param {Array<string>} defaultPermissions
 * @returns {boolean}
 */
export const hasPermissions = (userPermissions, defaultPermissions) => {
  for (const defaultPermission of defaultPermissions) {
    if (!userPermissions.includes(defaultPermission)) return false;
  }

  return true;
};

const PERMISSIONS = [
  "CreateInstantInvite",
  "KickMembers",
  "BanMembers",
  "ManageChannels",
  "ManageGuild",
  "AddReactions",
  "ViewAuditLog",
  "PrioritySpeaker",
  "Stream",
  "ViewChannel",
  "SendMessages",
  "SendTTSMessages",
  "ManageMessages",
  "EmbedLinks",
  "AttachFiles",
  "ReadMessageHistory",
  "MentionEveryone",
  "UseExternalEmojis",
  "Connect",
  "Speak",
  "MuteMembers",
  "DeafenMembers",
  "MoveMembers",
  "UseVAD",
  "ChangeNickname",
  "ManageNicknames",
  "ManageRoles",
  "ManageWebhooks",
  "ManageEmojisAndStickers",
  "ManageGuildExpressions",
  "UseApplicationCommands",
  "RequestToSpeak",
  "ManageThreads",
  "CreatePublicThreads",
  "CreatePrivateThreads",
  "UseExternalStickers",
  "SendMessagesInThreads",
  "UseEmbeddedActivities",
  "ModerateMembers",
  "UseSoundboard",
  "UseExternalSounds",
  "SendVoiceMessages",
];
