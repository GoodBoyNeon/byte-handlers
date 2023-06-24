import { client } from "../index.js";
import { importDefault } from "../helpers/importDefault.js";
import glob from "glob";
import { promisify } from "util";
import { readdirSync } from "fs";
const globPromise = promisify(glob);

/**
 * We have this as a separate function just in case if we
 * ever decide to add categories to events or change the path.
 *
 * @returns {string[]}
 */
const getEventFiles = () => {
  const eventFiles = readdirSync("./src/events");
  return eventFiles;
};

export const handleEvents = async () => {
  const eventFiles = getEventFiles();

  eventFiles.forEach(async (eventFile) => {
    const event = await importDefault(`../events/${eventFile}`);
    try {
      // const event = require(eventFile);
      const listener = (...args) => event.run(...args, client);
      event.once
        ? client.once(event.name, listener)
        : client.on(event.name, listener);
    } catch (error) {
      return console.error(error);
    }
  });
};
