import "dotenv/config";
import { Byte } from "./lib/Byte.js";

export const client = new Byte();

client.init();
