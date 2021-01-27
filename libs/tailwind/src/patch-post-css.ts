import type { Configuration, RuleSetLoader, RuleSetUseItem } from 'webpack';

export function patchPostCSS(
  webpackConfig: Configuration,
  tailwindConfig,
  components = false
) {
  if (!tailwindConfig) {
    console.error('Missing tailwind config :', tailwindConfig);
    return;
  }
  if (tailwindConfig.purge && tailwindConfig.purge.enabled == null) {
    tailwindConfig.purge.enabled = webpackConfig.mode === 'production';
  }
  const pluginName = 'autoprefixer';
  for (const rule of webpackConfig.module.rules) {
    const ruleSetUseItems = rule.use as RuleSetUseItem[];
    if (
      !(ruleSetUseItems && ruleSetUseItems.length > 0) ||
      (!components && rule.exclude)
    ) {
      continue;
    }

    for (const useLoader of ruleSetUseItems) {
      const ruleSetLoader = useLoader as RuleSetLoader;
      const ruleSetLoaderOptions = ruleSetLoader.options as {
        [k: string]: any;
      };

      if (!(ruleSetLoader.options && ruleSetLoaderOptions.postcssOptions)) {
        continue;
      }

      const originPostcssOptions = ruleSetLoaderOptions.postcssOptions;

      ruleSetLoaderOptions.postcssOptions = (loader) => {
        const _postcssOptions = originPostcssOptions(loader);
        const insertIndex = _postcssOptions.plugins.findIndex(
          ({ postcssPlugin }) =>
            postcssPlugin && postcssPlugin.toLowerCase() === pluginName
        );

        if (insertIndex !== -1) {
          if(components && rule.exclude && tailwindConfig.darkMode === 'class'){
            _postcssOptions.plugins.splice(insertIndex, 0, ['postcss-ng-tailwind-in-components', { parentSelector: '.dark'}])
          }
          _postcssOptions.plugins.splice(insertIndex, 0, [
            'tailwindcss',
            tailwindConfig,
          ]);
        } else {
          console.error(`${pluginName} not found in postcss plugins`);
        }

        return _postcssOptions;
      };
    }
  }
}
