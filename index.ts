import alias from '@rollup/plugin-alias';
import beep from '@rollup/plugin-beep';
import commonjs from '@rollup/plugin-commonjs';
import html from 'rollup-plugin-html2';
import json from '@rollup/plugin-json';
import multi from '@rollup/plugin-multi-entry';
import polyfills from 'rollup-plugin-node-polyfills';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import ts from 'rollup-plugin-typescript2';
import dts from 'rollup-plugin-dts';
import serve from 'rollup-plugin-serve';
import tspaths from 'rollup-plugin-ts-paths';
import esbuild, { minify } from 'rollup-plugin-esbuild';
import livereload from 'rollup-plugin-livereload';
import copy from 'rollup-plugin-copy';
import del from 'rollup-plugin-delete';
import filesize from 'rollup-plugin-filesize';
import { terser } from 'rollup-plugin-terser';

export { defineConfig as rollup } from 'rollup';
export { config, env, banner, jsonmin, date } from '@brixtol/rollup-utils';

/**
 * Rollup Plugins
 *
 * A helper export of rollup plugins used within packages
 * maintained by [Brixtol](htpps://brixtol.com).
 */
export const plugin = {
  /**
   * Alias modules in a build.
   *
   * [@rollup/plugin-alias](https://git.io/JuTc9)
   */
  get alias () { return alias; },
  /**
   * Beeps when a build ends with errors.
   *
   * [@rollup/plugin-beep](https://git.io/JuTEW)
   */
  get beep () { return beep; },
  /**
   * Copy files and folders, with glob support.
   *
   * [rollup-plugin-copy](https://git.io/JuTux)
   */
  get copy () { return copy; },
  /**
   * Convert CommonJS modules to ES Modules
   *
   * [@rollup/plugin-commonjs](https://git.io/JuTcI)
   */
  get commonjs () { return commonjs; },
  /**
   * Delete files and folders.
   *
   * [rollup-plugin-delete](https://git.io/JuTz3)
   */
  get del () { return del; },
  /**
   * Rolls`.d.ts? definition files, used together with
   * esbuild.
   *
   * rollup-plugin-dts](https://git.io/J1ykd)
   */
  get dts () { return dts; },
  /**
   * ESBuild integration for minification and TypeScript support.
   *
   * [rollup-plugin-esbuild](https://git.io/J1DEP)
   */
  get esbuild () { return esbuild; },
  /**
   * Show filesize in the cli
   *
   * [rollup-plugin-filesize](https://git.io/JuTzw)
   */
  get filesize () { return filesize; },
  /**
   * Creates HTML files to serve Rollup bundles
   *
   * [rollup-plugin-html](https://git.io/J1Q6Q)
   */
  get html () { return html; },
  /**
   * Convert JSON files to ES Modules.
   *
   * [@rollup/plugin-json](https://git.io/JuTni)
   */
  get json () { return json; },
  /**
   * Live Reload after changes
   *
   * [rollup-plugin-livereload](https://git.io/JuTu8)
   */
  get livereload () { return livereload; },
  /**
   * Allows use of multiple entry points for a bundle.
   *
   * [@rollup/plugin-multi-entry](https://git.io/JwRT2)
   */
  get multi () { return multi; },
  /**
   * Allows the node builtins to be required/imported.
   *
   * [rollup-plugin-node-polyfills](https://git.io/JuTuV)
   */
  get polyfills () { return polyfills; },
  /**
   * Seamless integration between Rollup and PostCSS.
   *
   * [rollup-plugin-postcss](https://git.io/JuEZg)
   */
  get postcss () { return postcss; },
  /**
   * Use the Node resolution algorithm.
   *
   * [@rollup/plugin-node-resolve](https://git.io/JOqCR)
   */
  get resolve () { return resolve; },
  /**
   * Replace occurrences of a set of strings.
   *
   * [@rollup/plugin-replace](https://git.io/JuTcC)
   */
  get replace () { return replace; },
  /**
   * Serve the bundle
   *
   * [rollup-plugin-serve](https://git.io/JuTuq)
   */
  get serve () { return serve; },
  /**
   * Replace alias with resolved import from paths in tsconfig.json
   *
   * rollup-plugin-ts-paths](https://git.io/JuTEV)
   */
  get tspaths () { return tspaths; },
  /**
   * Minify using esbuild
   *
   * [rollup-plugin-esbuild](https://git.io/J1DEP)
   */
  get esminify () { return minify; },
  /**
   * Minify generated es bundle using terser under the hood.
   *
   * [rollup-plugin-terser](https://git.io/JuTz5)
   */
  get terser () { return terser; },
  /**
   * Alternative Typescript Rollup plugin.
   *
   * [rollup-plugin-typescript2](https://git.io/JuEpw)
   */
  get ts () { return ts; }

};
