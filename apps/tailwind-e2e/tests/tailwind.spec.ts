import {
  checkFilesExist,
  cleanup,
  readFile,
  renameFile,
  runCommand,
  runCommandAsync,
  runNxCommandAsync,
} from '@nrwl/nx-plugin/testing';
import {
  detectPackageManager,
  getPackageManagerInstallCommand,
} from '@nrwl/workspace/src/utils/detect-package-manager';
import { checkStylesConfig, checkStylesFile, createStylesFiles, ensureNgProject, ensureNxProject, removeTailwindFiles, useStylesConfig, remove } from '../utils';

jest.setTimeout(999999);

async function assertNx(schematicName: 'nx-setup' | 'ng-add') {
  await runCommandAsync(
    `${getPackageManagerInstallCommand(
      detectPackageManager(),
      true
    )} @nrwl/angular`
  );

  await runNxCommandAsync(
    'generate @nrwl/angular:application nx-test --e2eTestRunner=none --unitTestRunner=none --inlineStyle --inlineTemplate --directory=sub --linter=eslint --style=scss --routing=false'
  );

  await runNxCommandAsync(`generate @ngneat/tailwind:${schematicName}`);

  expect(() =>
    checkFilesExist('tailwind.config.js', 'webpack.config.js')
  ).not.toThrow();

  // expect(() => runNxCommandAsync('run sub-nx-test:serve').then()).not.toThrow();
}

describe('tailwind e2e', () => {
  const pluginNpmName = '@ngneat/tailwind';
  const pluginDistPath = 'dist/libs/tailwind';

  afterEach(() => {
    try {
      cleanup();
    } catch {
      const localTmpDir = `./tmp/nx-e2e`;
      remove(localTmpDir);
    }
  });

  it('should work with Angular + Nx CLI in Nx', async (done) => {
    ensureNxProject(pluginNpmName, pluginDistPath);
    await assertNx('nx-setup');
    done();
  });

  it('should work with Angular + AngularCLI in Nx (using nx-setup)', async (done) => {
    ensureNxProject(pluginNpmName, pluginDistPath, 'ng');
    await assertNx('nx-setup');
    done();
  });

  it('should work with Angular + AngularCLI in Nx (using ng-add)', async (done) => {
    ensureNxProject(pluginNpmName, pluginDistPath, 'ng');
    await assertNx('ng-add');
    done();
  });

  it('should work with Angular CLI project', async (done) => {
    ensureNgProject(pluginNpmName, pluginDistPath);
    await runCommandAsync(`ng add @ngneat/tailwind`);

    expect(() =>
      checkFilesExist('tailwind.config.js', 'webpack.config.js')
    ).not.toThrow();

    expect(() => runCommandAsync('ng serve').then()).not.toThrow();

    done();
  });

  describe('styles', () => {
    beforeAll(() => {
      ensureNgProject(pluginNpmName, pluginDistPath);
      createStylesFiles();
    });

    test.each([
      'global.css',
      'global.scss',
      'global.less',
      'styles.less',
      'styles.css'
    ])('should patch %s', (name) => {
      const fileName = `src/${name}`;
      useStylesConfig([fileName]);
      runCommand(`ng add @ngneat/tailwind --defaults`);

      expect(() =>
        checkStylesFile(fileName)
      ).not.toThrow();
    })

    afterEach(() => {
      removeTailwindFiles();
    })

    describe('wrong.css', () =>{
      beforeAll(async() => {
        useStylesConfig(['src/wrong.css']);
        await runCommandAsync(`ng add @ngneat/tailwind --defaults`);
      });

      it('should not patch wrong.css', () => {
        expect(() =>
          checkStylesFile('src/wrong.css')
        ).toThrow();
      });

      it('should set styles config to node_modules/tailwindcss/tailwind.css', async () => {
        expect(() =>
          checkStylesConfig(true)
        ).not.toThrow();
      });

    })
  });
});
