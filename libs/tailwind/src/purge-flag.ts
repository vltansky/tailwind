export function guessProductionMode() {
  const argv = process.argv.join(' ').toLowerCase();
  const isBuild = argv.includes(" build");
  const isBuildAlias = argv.includes("ng b");
  const isFlag = argv.includes("--prod");
  const isProdEnv = process.env.NODE_ENV === 'production';
  return isBuild || isFlag || isProdEnv || isBuildAlias;
}
