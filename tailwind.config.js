/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    relative: true,
    transform: (content) =>content.replace(/taos:/g,''),
    files: [
      "./src/components/Header.js",
      "./src/components/Hero.js",
      "./src/components/About.js",
      "./src/components/Projects.js",
      "./src/components/Blog.js",
      "./src/components/Footer.js",
      "./src/App.js", 
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [
    require('taos/plugin'),
  ],
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ]
}

