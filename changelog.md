## _CHANGELOG_

## v1.5.4 - 31/03/22

Couple of adjustments, mostly related to app generation

- Added @rollup/plugin-beep type because ShellScape, (the rollup plugin maintainer) is a detestable little cretin
- Added rollup-plugin-browsersync
- Removed rollup-plugin-serve
- Removed rollup-plugin-livereload

## v1.5.3 - 31/03/22

Type Fixes

- Included the `types` directory in npm packaging as types extend it.
- Forget to extend the ESBuild options interface, fixed that.

## v1.5.2 - 31/03/2

Updated Types and cleaned up some now removed plugins

- Improved readme
- Replaced @rollup/plugin-html for @brixtol/rollup-html
- Provided temporary declaration exports for rollup-plugin-esbuild (see: https://github.com/egoist/rollup-plugin-esbuild/issues/332)

## v1.5.0 - 21/11/21

Bundler is now using [ESBuild](https://github.com/egoist/rollup-plugin-esbuild)

- Added rollup-plugin-dts
- Added rollup-plugin-esbuild
- Removed rollup-plugin-typescript2
- Removed @rollup/plugin-typescript (good fucking riddance)
- Removed rollup-plugin-scss
- Removed rollup-plugin-ts-paths
- Removed terser (we no use esbuild for minification)

## v1.4.0 - 24/10/21

@rollup/plugin-typescript is constantly causing issues and is now only used in certain packages. ShellScape the maintainer of rollup plugins is a detestable little cretin who radiates arrogance so forking the project and helping fix the issues is not something I would be prepared to do (because fuck him, that's why). As a result, we also provide rollup-plugin-typescript2 via plugins. It's not ideal but it suffices for the time being.

- Added rollup-plugin-typescript2 again, using export name `ts2`
- Updated dependencies

## v1.3.3 - 13/10/21

- Updated dependencies

## v1.3.2 - 13/10/21

- Exposed rollup-utils `date` utility

## v1.3.1 - 07/10/21

- Fixed typo in readme

## v1.3.0 - 07/10/21

- Converted `plugin` export as a serious of `getters`
- Replaced rollup-plugin-typescript2 with @rollup/plugin-typescript (again)
- Removed rollup-plugin-typescript2 completely
- Added @rollup/plugin-multi-entry
- Added tslib as a peerDependency
- Version bumps for various plugins

## v1.2.0 - 10/09/21

- Module is ESM added type `module`to package.
- Update readme and inform upon ESM kind.

## v1.1.0 - 09/09/21

- Updated readme
- Reverted @rollup/plugin-typescript back to rollup-plugin-typescript2
- Added rollup-plugin-postcss
- Added rollup-plugin-scss
- Removed rollup-plugin-ts
- Made rollup an optional dependency
- Added the following optional dependencies
  - autoprefixer
  - typescript
  - tsconfig
  - postcss
  - node-sass

## v1.0.1 - 03/00/21

- Replaced rollup-plugin-typescript2 with @rollup/plugin-typescript
- Added @rollup/plugin-html
- Added linked JSDoc annotations

## v1.0.0 - 23/08/21

- Initial Release
