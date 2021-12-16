#!/usr/bin/env node
const { Command } = require("commander");
const program = new Command();

const { build } = require("./command/build");

program
  .command("build")
  .description("Compile components in production mode")
  .action(build);

program.parse();
