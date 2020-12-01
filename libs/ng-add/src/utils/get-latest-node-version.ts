import * as pacote from 'pacote';

export interface NodePackage {
  name: string;
  version: string;
}

/**
 * Attempt to retrieve the metadata of the package name.
 * If no metadata found, will use "latest" as version for the package.
 *
 * @param pkgName
 * @return {Promise<NodePackage>}
 */
export function getLatestNodeVersion(pkgName: string): Promise<NodePackage> {
  const DEFAULT_VERSION = 'latest';

  function buildPackage(
    name: string,
    version: string = DEFAULT_VERSION
  ): NodePackage {
    return {name, version};
  }

  return pacote
    .manifest(pkgName)
    .then((manifest) => buildPackage(pkgName, manifest.version))
    .catch((err) => {
      console.warn(
        `Error fetching metadata for ${pkgName} with ${
          err.message || err.toString()
        }. Using 'latest' version`
      );
      return buildPackage(pkgName);
    });
}
