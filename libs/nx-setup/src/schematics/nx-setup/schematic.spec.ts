import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import { createEmptyWorkspace } from '@nrwl/workspace/testing';
import { join } from 'path';

import { NxSetupSchematicSchema } from './schema';

describe('nx-setup schematic', () => {
  let appTree: Tree;
  const options: NxSetupSchematicSchema = { name: 'test' };

  const testRunner = new SchematicTestRunner(
    '@tailwind/nx-setup',
    join(__dirname, '../../../collection.json')
  );

  beforeEach(() => {
    appTree = createEmptyWorkspace(Tree.empty());
  });

  it('should run successfully', async () => {
    await expect(
      testRunner.runSchematicAsync('nx-setup', options, appTree).toPromise()
    ).resolves.not.toThrowError();
  });
});
