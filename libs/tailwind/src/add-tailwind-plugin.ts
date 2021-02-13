import type { Configuration, RuleSetLoader, RuleSetUseItem } from 'webpack';

export interface AddTailwindParams {
  webpackConfig: Configuration;
  tailwindConfig: Record<string, unknown> & { purge?: { enabled?: boolean } };
  patchComponentsStyles?: boolean;
}

export function addTailwindPlugin({
  webpackConfig,
  tailwindConfig,
  patchComponentsStyles = false,
}: AddTailwindParams) {
  if (!tailwindConfig) {
    console.error('Missing tailwind config :', tailwindConfig);
    return;
  }
  if (tailwindConfig.purge && typeof tailwindConfig.purge.enabled === 'undefined') {
    tailwindConfig.purge.enabled = webpackConfig.mode === 'production';
  }
  const pluginName = 'autoprefixer';
  for (const rule of webpackConfig.module.rules) {
    const ruleSetUseItems = rule.use as RuleSetUseItem[];
    if (
      !(ruleSetUseItems && ruleSetUseItems.length > 0) ||
      (!patchComponentsStyles && rule.exclude)
    ) {
      continue;
    }

    for (const useLoader of ruleSetUseItems) {
      const ruleSetLoader = useLoader as RuleSetLoader;
      const ruleSetLoaderOptions = ruleSetLoader.options as {
        /* eslint-disable @typescript-eslint/no-explicit-any */
        [k: string]: any;
      };

      if (!ruleSetLoaderOptions) {
        continue;
      }

      if (ruleSetLoaderOptions.postcssOptions) {
        const originPostcssOptions = ruleSetLoaderOptions.postcssOptions;

        ruleSetLoaderOptions.postcssOptions = (loader) => {
          const _postcssOptions = originPostcssOptions(loader);
          const insertIndex = getInsertIndex(
            _postcssOptions.plugins,
            pluginName
          );

          if (insertIndex !== -1) {
            if (
              patchComponentsStyles &&
              rule.exclude &&
              tailwindConfig.darkMode === 'class'
            ) {
              insertPlugin(_postcssOptions.plugins, insertIndex, [
                'postcss-ng-tailwind-in-components',
                { parentSelector: '.dark' },
              ]);
            }
            insertPlugin(_postcssOptions.plugins, insertIndex, [
              'tailwindcss',
              tailwindConfig,
            ]);
          } else {
            console.error(`${pluginName} not found in postcss plugins`);
          }

          return _postcssOptions;
        };
      } else {
        if (ruleSetLoader.loader?.includes('postcss')) {
          const originalPostcssPluginFn = ruleSetLoaderOptions.plugins;

          if (!originalPostcssPluginFn) {
            continue;
          }

          ruleSetLoaderOptions.plugins = (...args) => {
            const plugins = originalPostcssPluginFn(...args);
            const insertIndex = getInsertIndex(plugins, pluginName);
            if (insertIndex !== -1) {
              insertPlugin(
                plugins,
                insertIndex,
                /* eslint-disable @typescript-eslint/no-var-requires */
                require('tailwindcss')(tailwindConfig)
              );
            } else {
              console.error(`${pluginName} not found in postcss plugins`);
            }

            return plugins;
          };
        }
      }
    }
  }
}

function getInsertIndex(
  plugins: { postcssPlugin?: string }[],
  pluginToInsertAfter: string
): number {
  return plugins.findIndex(
    ({ postcssPlugin }) => postcssPlugin?.toLowerCase() === pluginToInsertAfter
  );
}

function insertPlugin(
  plugins: unknown[],
  index: number,
  pluginToInsert: unknown
): void {
  plugins.splice(index, 0, pluginToInsert);
}
