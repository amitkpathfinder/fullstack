// tailwind.config.js
module.exports = {
  // prefix: "tw-",
  purge: {
    mode: "all",
    preserveHtmlElements: false,
    enabled: true,
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  },
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
