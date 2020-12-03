import type { workspaces } from '@angular-devkit/core';
import type { Rule, Tree } from '@angular-devkit/schematics';
import { InsertChange } from '@nrwl/workspace';
import { getTailwindImports } from './get-tailwind-imports';

export function updateProjectRootStyles(
  projectName: string,
  getWorkspace: (tree: Tree) => Promise<workspaces.WorkspaceDefinition>
): Rule {
  return (tree, context) => {
    return getWorkspace(tree).then((workspace) => {
      const project = workspace.projects.get(projectName);
      const [style] = [
        ...((project.targets.get('build')?.options?.styles as unknown[]) ?? []),
      ];
      let stylePath = style;

      if (typeof style === 'object') {
        stylePath = (style as { input: string }).input;
      }

      if (stylePath == null) {
        context.logger.error('Cannot find style path');
        return tree;
      }

      const insertion = new InsertChange(
        stylePath as string,
        0,
        getTailwindImports()
      );
      const recorder = tree.beginUpdate(stylePath as string);
      recorder.insertLeft(insertion.pos, insertion.toAdd);
      tree.commitUpdate(recorder);
      return tree;
    }) as ReturnType<Rule>;
  };
}
