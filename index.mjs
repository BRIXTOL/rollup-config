import ts from "rollup-plugin-ts";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import commonjs from "@rollup/plugin-commonjs";
import nodePolyfills from "rollup-plugin-node-polyfills";
import nodeResolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import alias from "@rollup/plugin-alias";
import beep from "@rollup/plugin-beep";
import copy from "rollup-plugin-copy";
import del from "rollup-plugin-delete";
import filesize from "rollup-plugin-filesize";
import { terser } from "rollup-plugin-terser";

/* -------------------------------------------- */
/* CORE                                         */
/* -------------------------------------------- */

export { config, env, banner, jsonmin } from "@brixtol/rollup-utils";
export { defineConfig as rollup } from "rollup";

/* -------------------------------------------- */
/* PLUGINS                                      */
/* -------------------------------------------- */

export const plugin = {
  ts,
  serve,
  livereload,
  commonjs,
  nodePolyfills,
  nodeResolve,
  replace,
  alias,
  beep,
  copy,
  del,
  filesize,
  terser
}
