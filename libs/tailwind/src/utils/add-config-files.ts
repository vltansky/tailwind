import { normalize } from '@angular-devkit/core';
import {
  apply,
  applyTemplates,
  mergeWith,
  move,
  Rule,
  url,
} from '@angular-devkit/schematics';
import { isInJest } from './is-in-jest';

export function addConfigFiles(
  style: string,
  appsDir?: string,
  libsDir?: string
): Rule {
  return mergeWith(
    apply(url(isInJest() ? '../files' : './files'), [
      applyTemplates({
        style,
        appsDir,
        libsDir,
      }),
      move(normalize('./')),
    ])
  );
}
