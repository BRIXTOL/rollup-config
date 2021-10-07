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
import tspaths from 'rollup-plugin-ts-paths';
import scss from 'rollup-plugin-scss';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import copy from 'rollup-plugin-copy';
import del from 'rollup-plugin-delete';
import filesize from 'rollup-plugin-filesize';
import { terser } from 'rollup-plugin-terser';
export { defineConfig as rollup } from 'rollup';
export { config, env, banner, jsonmin } from '@brixtol/rollup-utils';
export const plugin = {
    get alias() { return alias; },
    get beep() { return beep; },
    get copy() { return copy; },
    get commonjs() { return commonjs; },
    get del() { return del; },
    get filesize() { return filesize; },
    get html() { return html; },
    get json() { return json; },
    get livereload() { return livereload; },
    get multi() { return multi; },
    get polyfills() { return polyfills; },
    get postcss() { return postcss; },
    get resolve() { return resolve; },
    get replace() { return replace; },
    get scss() { return scss; },
    get serve() { return serve; },
    get terser() { return terser; },
    get ts() { return ts; },
    get tspaths() { return tspaths; }
};
