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
import tspaths from 'rollup-plugin-ts-paths';
import livereload from 'rollup-plugin-livereload';
import copy from 'rollup-plugin-copy';
import del from 'rollup-plugin-delete';
import { terser } from 'rollup-plugin-terser';
export { defineConfig as rollup } from 'rollup';
export { config, env, banner, jsonmin, date } from '@brixtol/rollup-utils';
/**
 * Rollup Plugins
 *
 * A helper export of rollup plugins used within packages
 * maintained by [Brixtol](htpps://brixtol.com).
 */
export declare const plugin: {
    /**
     * Alias modules in a build.
     *
     * [@rollup/plugin-alias](https://git.io/JuTc9)
     */
    readonly alias: typeof alias;
    /**
     * Beeps when a build ends with errors.
     *
     * [@rollup/plugin-beep](https://git.io/JuTEW)
     */
    readonly beep: typeof beep;
    /**
     * Copy files and folders, with glob support.
     *
     * [rollup-plugin-copy](https://git.io/JuTux)
     */
    readonly copy: typeof copy;
    /**
     * Convert CommonJS modules to ES Modules
     *
     * [@rollup/plugin-commonjs](https://git.io/JuTcI)
     */
    readonly commonjs: typeof commonjs;
    /**
     * Delete files and folders.
     *
     * [rollup-plugin-delete](https://git.io/JuTz3)
     */
    readonly del: typeof del;
    /**
     * Rolls`.d.ts? definition files, used together with
     * esbuild.
     *
     * rollup-plugin-dts](https://git.io/J1ykd)
     */
    readonly dts: import("rollup").PluginImpl<import("rollup-plugin-dts").Options>;
    /**
     * ESBuild integration for minification and TypeScript support.
     *
     * [rollup-plugin-esbuild](https://git.io/J1DEP)
     */
    readonly esbuild: (options?: import("rollup-plugin-esbuild").Options) => import("rollup").Plugin;
    /**
     * Show filesize in the cli
     *
     * [rollup-plugin-filesize](https://git.io/JuTzw)
     */
    readonly filesize: (options?: import("rollup-plugin-filesize").FileSizePluginOptions) => import("rollup").Plugin;
    /**
     * Creates HTML files to serve Rollup bundles
     *
     * [@rollup/plugin-html](https://git.io/JuTWL)
     */
    readonly html: typeof html;
    /**
     * Convert JSON files to ES Modules.
     *
     * [@rollup/plugin-json](https://git.io/JuTni)
     */
    readonly json: typeof json;
    /**
     * Live Reload after changes
     *
     * [rollup-plugin-livereload](https://git.io/JuTu8)
     */
    readonly livereload: typeof livereload;
    /**
     * Allows use of multiple entry points for a bundle.
     *
     * [@rollup/plugin-multi-entry](https://git.io/JwRT2)
     */
    readonly multi: typeof multi;
    /**
     * Allows the node builtins to be required/imported.
     *
     * [rollup-plugin-node-polyfills](https://git.io/JuTuV)
     */
    readonly polyfills: typeof polyfills;
    /**
     * Seamless integration between Rollup and PostCSS.
     *
     * [rollup-plugin-postcss](https://git.io/JuEZg)
     */
    readonly postcss: typeof postcss;
    /**
     * Use the Node resolution algorithm.
     *
     * [@rollup/plugin-node-resolve](https://git.io/JOqCR)
     */
    readonly resolve: typeof resolve;
    /**
     * Replace occurrences of a set of strings.
     *
     * [@rollup/plugin-replace](https://git.io/JuTcC)
     */
    readonly replace: typeof replace;
    /**
     * Serve the bundle
     *
     * [rollup-plugin-serve](https://git.io/JuTuq)
     */
    readonly serve: any;
    /**
     * Replace alias with resolved import from paths in tsconfig.json
     *
     * rollup-plugin-ts-paths](https://git.io/JuTEV)
     */
    readonly tspaths: typeof tspaths;
    /**
     * Minify using esbuild
     *
     * [rollup-plugin-esbuild](https://git.io/J1DEP)
     */
    readonly esminify: (options?: {
        sourceMap?: boolean;
        minify?: boolean;
        minifyWhitespace?: boolean;
        minifyIdentifiers?: boolean;
        minifySyntax?: boolean;
        keepNames?: boolean;
        legalComments?: "inline" | "none" | "external" | "eof" | "linked";
    }) => import("rollup").Plugin;
    /**
     * Minify generated es bundle using terser under the hood.
     *
     * [rollup-plugin-terser](https://git.io/JuTz5)
     */
    readonly terser: typeof terser;
    /**
     * Alternative Typescript Rollup plugin.
     *
     * [rollup-plugin-typescript2](https://git.io/JuEpw)
     */
    readonly ts: import("rollup").PluginImpl<import("rollup-plugin-typescript2/dist/partial").Partial<import("rollup-plugin-typescript2/dist/ioptions").IOptions>>;
};
//# sourceMappingURL=index.d.ts.map