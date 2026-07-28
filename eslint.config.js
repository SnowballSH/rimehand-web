import js from '@eslint/js';
import eslintPluginAstro from 'eslint-plugin-astro';
import globals from 'globals';

export default [
	{
		ignores: ['.astro/**', 'dist/**', 'node_modules/**'],
	},
	js.configs.recommended,
	...eslintPluginAstro.configs.recommended,
	{
		files: ['**/*.{astro,js,mjs}'],
		languageOptions: {
			globals: globals.node,
		},
		linterOptions: {
			reportUnusedDisableDirectives: 'error',
			reportUnusedInlineConfigs: 'error',
		},
	},
];
