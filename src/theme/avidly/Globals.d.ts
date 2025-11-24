declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*?island' {
  const component: any;
  export default component;
}

