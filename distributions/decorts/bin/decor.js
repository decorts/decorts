#!/usr/bin/env node

require('@decorts/cli').run()
  .catch((error) => {
    // require('consola').fatal(error)
    console.log(error);
    require('exit')(2)
  })
