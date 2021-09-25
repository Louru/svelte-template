# svelte-template
A Svelte template with support for Vite + Typescript + Tailwind + Jest + Testing Library

## Getting started
```
npx degit git@github.com:Louru/svelte-template.git my-svelte-project
cd my-svelte-project
npm i
npm run dev
```

### Size when built
```
dist/index.html                  0.48 KiB
dist/assets/index.4e8470d0.css   3.54 KiB / brotli: 1.15 KiB
dist/assets/index.a2c081d8.js    7.31 KiB / brotli: 1.94 KiB
dist/assets/vendor.27bf04e0.js   19.87 KiB / brotli: 7.48 KiB
```

### Limitations
This template setup should work quite well excluding trying to test components with <a href="https://github.com/mefechoel/svelte-navigator">svelte-navigator</a>. I wasn't able to get around the errors with using jest's mock feature nor with the provided <a href="https://github.com/mefechoel/svelte-navigator#testing">WrapRouter</a>. I did create <a href="https://github.com/mefechoel/svelte-navigator/issues/47">a new ticket</a> about the issue, but let's see if it gets resolved. Otherwise it could be best to use a different router.

### process.env
This template also includes the support for `process.env` variables rather than `import.meta.env` variables. This is because <a href="https://github.com/facebook/jest/issues/9430">Jest doesn't support it yet</a>, so `process` was used instead (<a href="https://github.com/vitejs/vite/issues/1149#issuecomment-857686209">thanks to jongbelegen</a>).
