import { ProjectGraph, ProjectGraphNode } from '@nrwl/workspace';

export function getDefaultProjectFromGraph(
  graph: ProjectGraph,
  projectName?: string
): ProjectGraphNode {
  if (projectName) return graph.nodes[projectName];
  return Object.values(graph.nodes).find(
    (node) =>
      node.type === 'app' &&
      Object.values(node.data.architect).some((target) =>
        target.builder.includes('angular')
      )
  );
}
