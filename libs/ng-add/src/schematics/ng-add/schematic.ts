import {
  chain,
  Rule,
  SchematicContext,
  Tree,
} from '@angular-devkit/schematics';
import {
  addDepsToPackageJson,
  getProjectGraphFromHost,
  projectRootDir,
  ProjectType,
} from '@nrwl/workspace';
import { getDefaultProjectFromGraph, getLatestNodeVersion } from '../../utils';
import { NgAddSchematicSchema } from './schema';

/**
 * Depending on your needs, you can change this to either `Library` or `Application`
 */
const projectType = ProjectType.Application;

interface NormalizedSchema extends NgAddSchematicSchema {
  projectName: string;
  projectRoot: string;
  projectDirectory: string;
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
  ctx: SchematicContext
): NormalizedSchema {
  const project = getDefaultProjectFromGraph(
    getProjectGraphFromHost(tree),
    options.project
  );

  if (project == null) {
    const msg = `Cannot find any Angular project in the current workspace.`;
    ctx.logger.fatal(msg);
    throw new Error(msg);
  }

  console.log('project', project);

  return {
    ...options,
    project: project.name,
    projectName: project.name,
    projectDirectory: project.data.root
      .split(projectRootDir(projectType) + '/')
      .pop(),
    projectRoot: project.data.root,
  };
}

function addDependenciesToPackageJson(options: NormalizedSchema): Rule {
  const deps = [
    'postcss',
    'tailwindcss',
    'postcss-import',
    'postcss-loader',
    'autoprefixer',
  ];

  if (options.style !== 'css') {
    deps.push(`postcss-${options.style}`);
  }

  return async (tree: Tree, ctx: SchematicContext) => {
    const devDeps = (await Promise.all(deps.map(getLatestNodeVersion))).reduce(
      (result, { name, version }) => {
        result[name] = version;
        return result;
      },
      {} as Record<string, string>
    );

    return addDepsToPackageJson({}, devDeps)(tree, ctx) as any;
  };
}

export default function (options: NgAddSchematicSchema): Rule {
  return (tree, context) => {
    const normalizedOptions = normalizeOptions(options, tree, context);
    return chain([addDependenciesToPackageJson(normalizedOptions)]);
  };
}
