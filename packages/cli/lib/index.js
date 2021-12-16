#!/usr/bin/env node
const { Command } = require("commander");
const program = new Command();

const { dev } = require("./command/dev");
const { build } = require("./command/build");

program
  .command("dev")
  .description("Compile components in development mode")
  .action(dev);

program
  .command("build")
  .description("Compile components in production mode")
  .action(build);

program.parse();
