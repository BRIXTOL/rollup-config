import type { CommonOptions, BuildOptions, Loader } from 'esbuild';
import type { Plugin } from 'rollup';

type OmitOptions = Omit<CommonOptions, (
  | 'sourcesContent'
  | 'sourcemap'
  | 'sourceRoot'
  | 'color'
  | 'logLevel'
  | 'logLimit'
)>

type MinifyOptions = Omit<OmitOptions, (
  | 'format'
  | 'sourcesContent'
  | 'globalName'
  | 'define'
  | 'pure'
  | 'jsx'
  | 'jsxFactory'
  | 'jsxFragment'
)>

interface ESBuildOptions extends OmitOptions {
  sourceMap?: boolean;
  optimizeDeps?: {
    include: string[]
    exclude?: string[]
    cwd?: string
    esbuildOptions?: BuildOptions
    sourceMap?: boolean
  }
  /**
   * Use this tsconfig file instead
   * Disable it by setting to `false`
   */
  tsconfig?: string | false;
  /**
   * Map extension to esbuild loader
   * Note that each entry (the extension) needs to start with a dot
   */
  loaders?: { [ext: string]: Loader | false; };
}

export function ESMinify(options?: MinifyOptions): Plugin
export function ESBuild(options?: ESBuildOptions): Plugin;
