import { normalize } from '@angular-devkit/core';
import {
  apply,
  applyTemplates,
  chain,
  mergeWith,
  move,
  Rule,
  SchematicContext,
  Tree,
  url,
} from '@angular-devkit/schematics';
import {
  addDepsToPackageJson,
  getProjectGraphFromHost,
  getWorkspace,
  InsertChange,
  ProjectGraph,
  ProjectGraphNode,
  projectRootDir,
  ProjectType,
  updateWorkspace,
} from '@nrwl/workspace';
import { appsDir, libsDir } from '@nrwl/workspace/src/utils/ast-utils';
import { getWorkspace as getNgWorkspace } from '@schematics/angular/utility/config';
import { NxSetupSchematicSchema } from './schema';

export function getDefaultProjectFromGraph(
  graph: ProjectGraph,
  projectName?: string
): ProjectGraphNode {
  if (projectName) return graph.nodes[projectName];
  return Object.values(graph.nodes).find(
    (node) =>
      node.data.projectType === ProjectType.Application &&
      Object.values(node.data.architect).some((target) =>
        target.builder.includes('angular')
      )
  );
}

/**
 * Depending on your needs, you can change this to either `Library` or `Application`
 */
const projectType = ProjectType.Application;

interface NormalizedSchema extends NxSetupSchematicSchema {
  projectName: string;
  projectRoot: string;
  projectDirectory: string;
  appsDir?: string;
  libsDir?: string;
}

// function normalizeOptions(options: NgAddSchematicSchema): NormalizedSchema {
//   const name = toFileName(options.name);
//   const projectDirectory = options.directory
//     ? `${toFileName(options.directory)}/${name}`
//     : name;
//   const projectName = projectDirectory.replace(new RegExp('/', 'g'), '-');
//   const projectRoot = `${projectRootDir(projectType)}/${projectDirectory}`;
//   const parsedTags = options.tags
//     ? options.tags.split(',').map((s) => s.trim())
//     : [];
//
//   return {
//     ...options,
//     projectName,
//     projectRoot,
//     projectDirectory,
//   };
// }

function normalizeOptions(
  options: NgAddSchematicSchema,
  tree: Tree,
  ctx: SchematicContext,
  isNx: boolean
): NormalizedSchema {
  let project;
  if (isNx) {
    project = getDefaultProjectFromGraph(
      getProjectGraphFromHost(tree),
      options.project
    );
  } else {
    console.log('workspace', getNgWorkspace(tree));
  }

  if (project == null) {
    const msg = `Cannot find any Angular project in the current workspace.`;
    ctx.logger.fatal(msg);
    throw new Error(msg);
  }

  return {
    ...options,
    project: project.name,
    projectName: project.name,
    projectDirectory: project.data.root
      .split(projectRootDir(projectType) + '/')
      .pop(),
    projectRoot: project.data.root,
    appsDir: appsDir(tree),
    libsDir: libsDir(tree),
  };
}

function addDependenciesToPackageJson(options: NormalizedSchema): Rule {
  const deps = [
    'postcss',
    'tailwindcss',
    'postcss-import',
    'postcss-loader',
    'autoprefixer',
    '@angular-builders/custom-webpack',
  ];

  if (options.style !== 'css') {
    deps.push(`postcss-${options.style}`);
  }

  return async (tree: Tree, ctx: SchematicContext) => {
    const devDeps = (
      await Promise.all(
        deps.map((dep) =>
          getLatestNodeVersion(dep).then(({ name, version }) => {
            ctx.logger.info(`✅️ Added ${name}@${version}`);
            return { name, version };
          })
        )
      )
    ).reduce((result, { name, version }) => {
      result[name] = version;
      return result;
    }, {} as Record<string, string>);

    return addDepsToPackageJson({}, devDeps)(tree, ctx) as any;
  };
}

function addConfigFiles(options: NormalizedSchema): Rule {
  return mergeWith(
    apply(url('./files'), [
      applyTemplates({
        style: options.style,
        appsDir: options.appsDir,
        libsDir: options.libsDir,
      }),
      move(normalize('./')),
    ])
  );
}

function updateWorkspaceJson(options: NormalizedSchema): Rule {
  return updateWorkspace((workspace) => {
    const project = workspace.projects.get(options.project);
    const buildTarget = project.targets.get('build');
    const serveTarget = project.targets.get('serve');

    serveTarget.builder = '@angular-builders/custom-webpack:dev-server';
    buildTarget.builder = '@angular-builders/custom-webpack:browser';
    buildTarget.options.customWebpackConfig = {
      path: 'webpack.config.js',
    };
  });
}

function updateProjectRootStyles(options: NormalizedSchema): Rule {
  return async (tree, context): Promise<any> => {
    const workspace = await getWorkspace(tree);
    const project = workspace.projects.get(options.project);
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
  };
}

export default function (options: NgAddSchematicSchema): Rule {
  return (tree, context) => {
    const normalizedOptions = normalizeOptions(
      options,
      tree,
      context,
      tree.exists('./nx.json')
    );
    return chain([
      addDependenciesToPackageJson(normalizedOptions),
      addConfigFiles(normalizedOptions),
      updateWorkspaceJson(normalizedOptions),
      updateProjectRootStyles(normalizedOptions),
    ]);
  };
}
