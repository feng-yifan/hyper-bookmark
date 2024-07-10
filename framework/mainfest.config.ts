import { defineManifest } from "@crxjs/vite-plugin";
import packageJson from "../package.json";
import { PATH_ENTRANCE_POPUP } from "./constant.ts";

const {name, version} = packageJson;

const [major, minor, patch] = version
  .replace(/[^\d.-]+/g, '')
  .split(/[.-]/);

export default defineManifest(async (env) => ({
  manifest_version: 3,
  name: env.mode === 'staging' ? `[INTERNAL]${name}` : name,
  version: `${major}.${minor}.${patch}`,
  action: {
    default_popup: PATH_ENTRANCE_POPUP,
  },
}));