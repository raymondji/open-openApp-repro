
import {openApp, apps} from "open";
import {openApp as openAppFixed} from "open-fixed";
import { parseArgs } from "node:util";

const args = parseArgs({
  options: {
    withFix: {
      type: "boolean",
    },
  },
});

if (args.values.withFix) {
    await openAppFixed(apps.chrome);
} else {
    await openApp(apps.chrome);
}