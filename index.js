import alias from '@rollup/plugin-alias';
import beep from '@rollup/plugin-beep';
import commonjs from '@rollup/plugin-commonjs';
import html from '@rollup/plugin-html';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import ts from 'rollup-plugin-typescript2';
import tspaths from 'rollup-plugin-ts-paths';
import polyfills from 'rollup-plugin-node-polyfills';
import postcss from 'rollup-plugin-postcss';
import scss from 'rollup-plugin-scss';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import copy from 'rollup-plugin-copy';
import del from 'rollup-plugin-delete';
import filesize from 'rollup-plugin-filesize';
import { terser } from 'rollup-plugin-terser';
/* -------------------------------------------- */
/* CORE                                         */
/* -------------------------------------------- */
export { defineConfig as rollup } from 'rollup';
export { config, env, banner, jsonmin } from '@brixtol/rollup-utils';
/* -------------------------------------------- */
/* PLUGINS                                      */
/* -------------------------------------------- */
export const plugin = {
    /**
     * Alias modules in a build.
     *
     * [@rollup/plugin-alias](https://git.io/JuTc9)
     */
    alias,
    /**
     * Beeps when a build ends with errors.
     *
     * [@rollup/plugin-beep](https://git.io/JuTEW)
     */
    beep,
    /**
     * Copy files and folders, with glob support.
     *
     * [rollup-plugin-copy](https://git.io/JuTux)
     */
    copy,
    /**
     * Convert CommonJS modules to ES Modules
     *
     * [@rollup/plugin-commonjs](https://git.io/JuTcI)
     */
    commonjs,
    /**
     * Delete files and folders.
     *
     * [rollup-plugin-delete](https://git.io/JuTz3)
     */
    del,
    /**
     * Show filesize in the cli
     *
     * [rollup-plugin-filesize](https://git.io/JuTzw)
     */
    filesize,
    /**
     * Creates HTML files to serve Rollup bundles
     *
     * [@rollup/plugin-html](https://git.io/JuTWL)
     */
    html,
    /**
     * Convert JSON files to ES Modules.
     *
     * [@rollup/plugin-json](https://git.io/JuTni)
     */
    json,
    /**
     * Live Reload after changes
     *
     * [rollup-plugin-livereload](https://git.io/JuTu8)
     */
    livereload,
    /**
     * Allows the node builtins to be required/imported.
     *
     * [rollup-plugin-node-polyfills](https://git.io/JuTuV)
     */
    polyfills,
    /**
     * Seamless integration between Rollup and PostCSS.
     *
     * [rollup-plugin-postcss](https://git.io/JuEZg)
     */
    postcss,
    /**
     * Use the Node resolution algorithm.
     *
     * [@rollup/plugin-node-resolve](https://git.io/JOqCR)
     */
    resolve,
    /**
     * Replace occurrences of a set of strings.
     *
     * [@rollup/plugin-replace](https://git.io/JuTcC)
     */
    replace,
    /**
     * Seamless integration with Typescript.
     *
     * [@rollup/plugin-typescript](https://git.io/JuTng)
     */
    ts,
    /**
     * Replace alias with resolved import from paths in tsconfig.json
     *
     * rollup-plugin-ts-paths](https://git.io/JuTEV)
     */
    tspaths,
    /**
     * Process SASS and SCSS files
     *
     * [rollup-plugin-scss](https://git.io/JuEZp)
     */
    scss,
    /**
     * Serve the bundle
     *
     * [rollup-plugin-serve](https://git.io/JuTuq)
     */
    serve,
    /**
     * Minify generated es bundle using terser under the hood.
     * [rollup-plugin-terser](https://git.io/JuTz5)
     */
    terser
};
;
