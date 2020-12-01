import {ensureNxProject, runCommandAsync, runNxCommandAsync,} from '@nrwl/nx-plugin/testing';
import {detectPackageManager, getPackageManagerInstallCommand} from "@nrwl/workspace/src/utils/detect-package-manager";

jest.setTimeout(30000000);

describe('nx e2e', () => {
  it('should work', async (done) => {
    ensureNxProject('@ngneat/tailwindx', 'dist/libs/ng-add');

    await runCommandAsync(
      `${getPackageManagerInstallCommand(
        detectPackageManager(),
        true
      )} @nrwl/angular`
    );

    await runNxCommandAsync(
      'generate @nrwl/angular:application nx-test --e2eTestRunner=none --skipTests --unitTestRunner=none --inlineStyle --inlineTemplate --directory=sub --linter=eslint --style=scss --routing=false'
    );

    await runNxCommandAsync(`generate @ngneat/tailwind:ng-add`);

    done();
  });
});
