import { checkFilesExist, readFile, readJson, updateFile } from "@nrwl/nx-plugin/testing";
import { removeSync, writeFileSync } from "fs-extra";
import * as path from 'path';

export function useStylesConfig(config: string[] = ['styles.scss']){
  const workspace = readJson('angular.json');
  workspace.projects.proj.architect.build.options.styles = config;
  updateFile('angular.json', JSON.stringify(workspace, null, 2))
}

export function createStylesFiles(){
  const localProj = path.join(`./tmp/nx-e2e`, 'proj', 'src');
  ['styles', 'global', 'wrong'].forEach((name) => {
    ['css', 'scss', 'less'].forEach(ext => {
      writeFileSync(path.join(localProj, `${name}.${ext}`), '');
    })
  });
}

export function checkStylesFile(stylesFile){
  checkFilesExist(stylesFile);
  const content = readFile(stylesFile);
  const check = content.includes('tailwind');
  if(!check){
    throw `Could not find tailwindcss imports in ${stylesFile}`;
  }
}

export function checkStylesConfig(shouldBeNodeModule = true){
  const workspace = readJson('angular.json');
  const isNodeModule = !!workspace.projects.proj.architect.build.options.styles.find(v=>v.includes('node_modules/tailwindcss/tailwind.css'));
  if(shouldBeNodeModule && isNodeModule){
    return true;
  }
  throw `styles config ${shouldBeNodeModule && !isNodeModule ? 'not' : ''} contain node_modules/tailwindcss/tailwind.css`;
}

export function removeTailwindFiles(){
  const localProj = path.join(`./tmp/nx-e2e`, 'proj',);
  removeSync(path.join(localProj, 'tailwind.config.js'));
}
