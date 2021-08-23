# @brixtol/rollup-config

Shareable rollup configuration used within the [Brixtol Textiles](https://brixtoltextiles.com) monorepo. The module acts as an interface, it exports an instance of Rollup and several plugins that are frequently used by packages contained across the workspace.

### Install

[pnpm](https://pnpm.js.org/en/cli/install)

```cli
pnpm add @brixtol/rollup-config -save-dev
```

> The module has a peer dependency on Rollup, so ensure that it is installed either globally or locally on your machine.

### Usage

<!-- prettier-ignore -->
```js
import { Rollup, env, ts, commonjs, terser } from "@brixtol/rollup-config";

export default Rollup(
  {
    input: "src/file.ts",
    output:   {
      format: 'cjs',
      dir: 'package',
      interop: 'default'
    },
    plugins: env.if('div')(
      [
        ts()
        commonjs()
      ]
    )(
      [
        terser()
      ]
    )
  }
);
```

> Types are re-exported and provided for all plugins which support them. Rollup configuration files within our workspace.

### Wiki

We operate atop of a cloud driven serverless architecture. Isolating the vast majority of development dependencies is emancipating. This module assists in the processes relating to our cloud builds, serverless apis, open/closed sourced package and applications using Lambdas or edge handlers.

### License

Licensed under [MIT](#LICENCE)

---

We [♡](https://www.brixtoltextiles.com/discount/4D3V3L0P3RS]) open source!
