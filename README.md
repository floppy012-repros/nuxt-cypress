# Nuxt3 Cypress Minimal Repro

Rel: https://github.com/nuxt/nuxt/discussions/19304#discussioncomment-5539280

## With `type: module`

`yarn cypress` works

`yarn prettier` fails with

```
Checking formatting...
[error] Invalid configuration file `.nuxt/app.config.mjs`: require() of ES Module /tmp/nuxt-project/.prettierrc.js from /tmp/nuxt-project/node_modules/prettier/third-party.js not supported.
[error] .prettierrc.js is treated as an ES module file as it is a .js file whose nearest parent package.json contains "type": "module" which declares all .js files in that package scope as ES modules.
[error] Instead rename .prettierrc.js to end in .cjs, change the requiring code to use dynamic import() which is available in all CommonJS modules, or change "type": "module" to "type": "commonjs" in /tmp/nuxt-project/package.json to treat all .js files as CommonJS (using .mjs for all ES modules instead).
[error] 
error Command failed with exit code 2.
```

## Without `type: module`

`yarn cypress` fails with

```
TypeError [ERR_UNKNOWN_FILE_EXTENSION]: Unknown file extension ".ts" for /tmp/nuxt-project/cypress.config.ts
    at new NodeError (node:internal/errors:387:5)
    at Object.getFileProtocolModuleFormat [as file:] (node:internal/modules/esm/get_format:76:11)
    at defaultGetFormat (node:internal/modules/esm/get_format:118:38)
    at defaultLoad (node:internal/modules/esm/load:81:20)
    at nextLoad (node:internal/modules/esm/loader:165:28)
    at ESMLoader.load (node:internal/modules/esm/loader:608:26)
    at ESMLoader.moduleProvider (node:internal/modules/esm/loader:464:22)
    at new ModuleJob (node:internal/modules/esm/module_job:63:26)
    at ESMLoader.#createModuleJob (node:internal/modules/esm/loader:483:17)
    at ESMLoader.getModuleJob (node:internal/modules/esm/loader:441:34)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async Promise.all (index 0)
    at async ESMLoader.import (node:internal/modules/esm/loader:533:24)
    at async importModuleDynamicallyWrapper (node:internal/vm/module:438:15)
    at async loadFile (/home/user/.cache/Cypress/12.9.0/Cypress/resources/app/node_modules/@packages/server/lib/plugins/child/run_require_async_child.js:106:14)
    at async EventEmitter. (/home/user/.cache/Cypress/12.9.0/Cypress/resources/app/node_modules/@packages/server/lib/plugins/child/run_require_async_child.js:116:32)
```

`yarn prettier` works

## Current solution to get both working

Rename `.prettierrc.js` to `.prettierrc.cjs`
