import alias from '@rollup/plugin-alias';
import beep from '@rollup/plugin-beep';
import commonjs from '@rollup/plugin-commonjs';
import html from '@rollup/plugin-html';
import json from '@rollup/plugin-json';
import multi from '@rollup/plugin-multi-entry';
import polyfills from 'rollup-plugin-node-polyfills';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import ts from '@rollup/plugin-typescript';
import ts2 from 'rollup-plugin-typescript2';
import tspaths from 'rollup-plugin-ts-paths';
import scss from 'rollup-plugin-scss';
import serve from 'rollup-plugin-serve';
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
   * Show filesize in the cli
   *
   * [rollup-plugin-filesize](https://git.io/JuTzw)
   */
  get filesize () { return filesize; },
  /**
   * Creates HTML files to serve Rollup bundles
   *
   * [@rollup/plugin-html](https://git.io/JuTWL)
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
   * Process SASS and SCSS files
   *
   * [rollup-plugin-scss](https://git.io/JuEZp)
   *
   * ---
   *
   * **DEPRECATED**
   *
   * > Use `plugin.postcss` instead. In future versions
   * this plugin will no longer be available on this export.
   *
   * @deprecated
   */
  get scss () { return scss; },
  /**
   * Serve the bundle
   *
   * [rollup-plugin-serve](https://git.io/JuTuq)
   */
  get serve () { return serve; },
  /**
   * Minify generated es bundle using terser under the hood.
   * [rollup-plugin-terser](https://git.io/JuTz5)
   */
  get terser () { return terser; },
  /**
   * Seamless integration with Typescript.
   *
   * [@rollup/plugin-typescript](https://git.io/JuTng)
   */
  get ts () { return ts; },
  /**
   * Alternative Typescript Rollup plugin.
   *
   * [rollup-plugin-typescript2](https://git.io/JuEpw)
   */
  get ts2 () { return ts2; },
  /**
   * Replace alias with resolved import from paths in tsconfig.json
   *
   * rollup-plugin-ts-paths](https://git.io/JuTEV)
   */
  get tspaths () { return tspaths; }
};
