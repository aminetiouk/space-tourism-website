declare module '*.json' {
  const value: any;
  export default value;
}

interface ImportMeta {
  glob: (pattern: string, options?: any) => Record<string, string>;
}
