export enum CssStyle {
  Css = 'css',
  Scss = 'scss',
  Sass = 'sass',
  Less = 'less',
  Stylus = 'styl',
}

export interface NgAddSchematicSchema {
  project: string;
  style: CssStyle;
}
