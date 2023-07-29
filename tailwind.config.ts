import type { Config } from "tailwind.config";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        primary: "#4D47C3",
        accent: "#F0EFFF",
        secondary: "#A7A3FF",
        hint: "#B0B0B0",
      },
    },
  },
};
