import {
  checkFilesExist,
  ensureNxProject,
  readJson,
  runNxCommandAsync,
  uniq,
} from '@nrwl/nx-plugin/testing';
describe('nx-setup e2e', () => {
  it('should create nx-setup', async (done) => {
    const plugin = uniq('nx-setup');
    ensureNxProject('@tailwind/nx-setup', 'dist/libs/nx-setup');
    await runNxCommandAsync(`generate @tailwind/nx-setup:nx-setup ${plugin}`);

    const result = await runNxCommandAsync(`build ${plugin}`);
    expect(result.stdout).toContain('Builder ran');

    done();
  });

  describe('--directory', () => {
    it('should create src in the specified directory', async (done) => {
      const plugin = uniq('nx-setup');
      ensureNxProject('@tailwind/nx-setup', 'dist/libs/nx-setup');
      await runNxCommandAsync(
        `generate @tailwind/nx-setup:nx-setup ${plugin} --directory subdir`
      );
      expect(() =>
        checkFilesExist(`libs/subdir/${plugin}/src/index.ts`)
      ).not.toThrow();
      done();
    });
  });

  describe('--tags', () => {
    it('should add tags to nx.json', async (done) => {
      const plugin = uniq('nx-setup');
      ensureNxProject('@tailwind/nx-setup', 'dist/libs/nx-setup');
      await runNxCommandAsync(
        `generate @tailwind/nx-setup:nx-setup ${plugin} --tags e2etag,e2ePackage`
      );
      const nxJson = readJson('nx.json');
      expect(nxJson.projects[plugin].tags).toEqual(['e2etag', 'e2ePackage']);
      done();
    });
  });
});
