export function guessProductionMode() {
  const argv = process.argv.join(' ').toLowerCase();
  const isBuild = argv.includes("build");
  const isFlag = argv.includes("--prod");
  const isProdEnv = process.env.NODE_ENV === 'production';
  return isBuild || isFlag || isProdEnv;
}
