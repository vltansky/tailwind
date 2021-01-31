import type { Configuration } from 'webpack';
import { addTailwindPlugin } from './add-tailwind-plugin';

/**
 *
 * @param webpackConfig
 * @param tailwindConfig
 * @param components
 *
 * @deprecated @see {@link addTailwindPlugin}
 */
export function patchPostCss(
  webpackConfig: Configuration,
  tailwindConfig: Record<string, unknown>,
  components = false
) {
  return addTailwindPlugin({
    webpackConfig,
    tailwindConfig,
    patchComponentsStyles: components,
  });
}
