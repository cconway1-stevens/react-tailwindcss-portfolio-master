
module.exports = {
    ci: {
      collect: {
        url: ["<http://localhost:3000/>"],
        startServerCommand: "yarn build && yarn start",
      },
      upload: {
        target: "temporary-public-storage",
      },
      assert: {
        preset: "lighthouse:recommended",
      },
    },
  };
  