import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import { nextui } from "@nextui-org/react";

const NextUIComps = ["button", "input", "select", "autocomplete"];

// eslint-disable-next-line import/no-default-export
export default {
  content: ["./src/**/*.tsx", `./node_modules/@nextui-org/theme/dist/components/(${NextUIComps.join("|")}).js`],
  theme: {
    extend: {
      fontFamily: {
        thin: ["var(--font-thin)", ...fontFamily.sans],
        default: ["var(--font-default)", ...fontFamily.sans],
        styled: ["var(--font-styled)", ...fontFamily.sans],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
} satisfies Config;
