# @brixtol/rollup-config

Shareable rollup configuration used within the [Brixtol Textiles](https://brixtoltextiles.com) monorepo. The module acts as an interface, exporting an instance of Rollup and several plugins that are frequently used by packages contained across the workspace. Each plugin is wrapped as a getter which helps negate exposing unused plugins on the export.

### Why

We operate atop of a cloud driven serverless architecture. This module assists in the processes relating to our cloud builds, serverless apis, open/closed sourced package and applications using Lambdas or edge handlers. It provides us a single dependency import for bundling with Rollup and single source for version controlling all plugins we leverage.

### Rollup + ESBuild

Bundles are generated using ESBuild together will Rollup. TypeScript and JavaScript modules are processed with [esbuild](https://esbuild.github.io/) using [rollup-plugin-esbuild](https://github.com/egoist/rollup-plugin-esbuild).

# Install

This module can be installed and leveraged by projects that are outside of our organization.

[pnpm](https://pnpm.js.org/en/cli/install)

```cli
pnpm add @brixtol/rollup-config -save-dev
```

### Brixtol Monorepo

If you are working within the Brixtol Textiles monorepo then please note that this module is installed at root, so for development on **private** modules it does not need to be installed. If a project is **public** facing or consumed in build images elsewhere then you will need to explicitly install it.

> Use `workspace:*` for version definition to ensure packages are always using the latest.

# Usage

This is an ESM module, your rollup config file must use a `.mjs` extension (`rollup.config.mjs`) or else Node will complain depending on your project presets. The `rollup()` export is totally optional, its a re-export of `defineConfig` and used to provide type completions.

<!-- prettier-ignore -->
```ts
import { rollup, env, plugin } from "@brixtol/rollup-config";

export default rollup(
  {
    input: "src/file.ts",
    output: {
      format: 'cjs',
      dir: 'package',
      sourcemap: env.is('dev', 'inline'), // Inline sourcemap in development else false
      interop: 'default'
    },
    plugins: env.if('div')(
      [
        plugin.esbuild(options: {}),
        // etc etc
      ]
    )(
      [
        plugin.terser()
      ]
    )
  }
);
```

> Types are re-exported and provided for all plugins which support them. Rollup configuration files within our workspace.

### What is the `env.if()` method?

This module provides exports from [@brixtol/rollup-utils](https://github.com/BRIXTOL/rollup-utils). The `env.if()` allows us to use single file for development and production bundles. When an `--environment` flag is passed with a of value of `prod` the plugins are concatenated, so first curried parameter is combined with the second curried parameter, which should both be an array list of plugins[].

The `dev` is default, so running `rollup -c -w` results in:

<!-- prettier-ignore -->
```ts
env.if('dev')([ plugin.commonjs(), plugin.ts() ])([ plugin.terser() ])
// => [ commonjs(), ts() ]
```

If you run `rollup -c --environment prod` it results in:

<!-- prettier-ignore -->
```ts
env.if('dev')([ plugin.commonjs(), plugin.ts() ])([ plugin.terser() ])
// => [ commonjs(), ts(), terser() ]
```

### Plugins

All plugins are available via the named `plugin` export. In addition to the plugins rollup's `defineConfig` function is exported as `rollup` namespace so configuration options have typings on the default export. Below is the complete list of included plugins:

| Export              | Plugin                                                             |
| ------------------- | ------------------------------------------------------------------ |
| `plugin.alias`      | [@rollup/plugin-alias](https://git.io/JuTc9)                       |
| `plugin.beep`       | [@rollup/plugin-beep](https://git.io/JuTEW)                        |
| `plugin.bs`         | [rollup-plugin-browsersync](https://git.io/JXjkK)                  |
| `plugin.copy`       | [rollup-plugin-copy](https://git.io/JuTux)                         |
| `plugin.commonjs`   | [@rollup/plugin-commonjs](https://git.io/JuTcI)                    |
| `plugin.del`        | [rollup-plugin-delete](https://git.io/JuTz3)                       |
| `plugin.esbuild`    | [rollup-plugin-esbuild](https://github.com/evanw/esbuild)          |
| `plugin.filesize`   | [rollup-plugin-filesize](https://git.io/JuTzw)                     |
| `plugin.html`       | [@brixtol/rollup-html](https://github.com/brixtol/rollup-html)     |
| `plugin.json`       | [@rollup/plugin-json](https://git.io/JuTni)                        |
| `plugin.livereload` | [rollup-plugin-livereload](https://git.io/JuTu8)                   |
| `plugin.multi`      | [@rollup/plugin-multi-entry](https://git.io/JwRT2)                 |
| `plugin.polyfills`  | [rollup-plugin-node-polyfills](https://git.io/JuTuV)               |
| `plugin.resolve`    | [@rollup/plugin-node-resolve](https://git.io/JOqCR)                |
| `plugin.postcss`    | [rollup-plugin-postcss](https://git.io/JuEZg)                      |
| `plugin.replace`    | [@rollup/plugin-replace](https://git.io/JuTcC)                     |
| `plugin.dts`        | [rollup-plugin-dts](https://github.com/Swatinem/rollup-plugin-dts) |
| `plugin.serve`      | [rollup-plugin-serve](https://git.io/JuTuq)                        |
| `plugin.terser`     | [rollup-plugin-terser](https://git.io/JuTz5)                       |

### Optional Dependencies

The module includes several optional dependencies, one being Rollup itself. Ensure that if you are using a plugin you install any optional it might require.

- [Autoprefixer](https://github.com/postcss/autoprefixer)
- [PostCSS](https://github.com/postcss/postcss)
- [Rollup](https://rollupjs.org/guide/en/)
- [TypeScript](https://www.typescriptlang.org/)

### Related

- [@brixtol/rollup-utils](https://github.com/BRIXTOL/rollup-utils)

### License

Licensed under [MIT](#LICENSE).

---

We [♡](https://www.brixtoltextiles.com/discount/4D3V3L0P3RS]) open source!
