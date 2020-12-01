import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import { createEmptyWorkspace } from '@nrwl/workspace/testing';
import { join } from 'path';

import { NgAddSchematicSchema } from './schema';

describe('ng-add schematic', () => {
  let appTree: Tree;
  const options: NgAddSchematicSchema = { name: 'test' };

  const testRunner = new SchematicTestRunner(
    '@tailwind/ng-add',
    join(__dirname, '../../../collection.json')
  );

  beforeEach(() => {
    appTree = createEmptyWorkspace(Tree.empty());
  });

  it('should run successfully', async () => {
    await expect(
      testRunner.runSchematicAsync('ng-add', options, appTree).toPromise()
    ).resolves.not.toThrowError();
  });
});
