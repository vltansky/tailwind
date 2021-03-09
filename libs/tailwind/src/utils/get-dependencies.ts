export function getDependencies(
  plugins: string | string[] = []
): { dependencies: string[]; plugins: string[] } {
  const pluginArray = Array.isArray(plugins) ? plugins : plugins.split(',');
  const pluginPackages = pluginArray?.map((plugin) => `@tailwindcss/${plugin}`);

  return {
    dependencies: ['tailwindcss', ...pluginPackages],
    plugins: pluginPackages.map((pkg) => `require('${pkg}')`),
  };
}
