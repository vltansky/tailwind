import type { workspaces } from '@angular-devkit/core';
import type { Rule } from '@angular-devkit/schematics';

export function updateWorkspaceTargets(
  projectName: string,
  updateWorkspaceFn: (
    updater: (
      workspace: workspaces.WorkspaceDefinition
    ) => void | PromiseLike<void>
  ) => Rule
): Rule {
  return (tree, context) => {
    return updateWorkspaceFn((workspace) => {
      const project = workspace.projects.get(projectName);
      const buildTarget = project.targets.get('build');
      const serveTarget = project.targets.get('serve');

      serveTarget.builder = '@angular-builders/custom-webpack:dev-server';
      buildTarget.builder = '@angular-builders/custom-webpack:browser';
      buildTarget.options.customWebpackConfig = {
        path: 'webpack.config.js',
      };

      if (!tree.exists('./nx.json')) {
        const testTarget = project.targets.get('test');
        if (testTarget) {
          testTarget.builder = '@angular-builders/custom-webpack:karma';
          testTarget.options.customWebpackConfig = {
            path: 'webpack.config.js',
          };
        }
      }
    })(tree, context);
  };
}
