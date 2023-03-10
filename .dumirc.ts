import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  hash: true,
  history: {
    type: 'hash',
  },
  themeConfig: {
    name: 'dumi-demo',
  },
  metas: [{ name: 'theme-color', content: '#1677ff' }],
  // @ts-ignore
  exportStatic: false,
  styles: [
    `.dumi-default-features-item {
      text-align: center;
    }
    body .dumi-default-sidebar>dl>dt {
      font-size: 16px;
    }
    body .dumi-default-sidebar>dl>dd>a {
      color: #717484;
      font-size: 14px;
    }
    `,
  ],
});
