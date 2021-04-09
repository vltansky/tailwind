export function guessProductionMode() {
  const argv = process.argv.join(' ').toLowerCase();
  const isProdEnv = process.env.NODE_ENV === 'production';
  return isProdEnv || [' build', ':build', 'ng b', '--prod'].some(command => argv.includes(command));
}
