import { resolve } from 'path'
import { defineConfig } from 'vite'
import alias from '@rollup/plugin-alias'

// Удалить у тега script crossorigin и type=module и добавить defer для прода.
function transformTagScriptForBuild() {
    return {
        name: 'remove-module',
        transformIndexHtml(html) {
            return html.replaceAll('crossorigin', '').replaceAll(/(type=\"module\")[\s]?/g, 'defer')
        },
    }
}

export default defineConfig({
    plugins: [
        process.env.APP_ENV === 'dev' ? '' : transformTagScriptForBuild(),
        alias({
            entries: {
                '@img': '/img',
            },
        }),
    ],
    publicDir: '../public',
    root: 'src',
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/index.html'),
                index: resolve(__dirname, 'src/main.html'),
                product: resolve(__dirname, 'src/product.html'),
                about: resolve(__dirname, 'src/about.html'),
                contacts: resolve(__dirname, 'src/contacts.html'),
                exhibit: resolve(__dirname, 'src/exhibit.html'),
                about: resolve(__dirname, 'src/about.html'),
            },
        },
    },
})
