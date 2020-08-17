export const config = {
	'env': {
		browser: true
	},
	'extends': [
		'plugin:@typescript-eslint/recommended',
		'@quantumly'
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		ecmaVersion: 2020,
		sourceType: 'module',
		project: './tsconfig.eslint.json'
	},
	'plugins': [
		'@angular-eslint',
		'@typescript-eslint'
	],
	'overrides': [
		{
			files: ['*.component.ts'],
			parser: '@typescript-eslint/parser',
			parserOptions: {
			  project: './tsconfig.app.json',
			  ecmaVersion: 2020,
			  sourceType: 'module'
			},
			plugins: ['@angular-eslint/template'],
			processor: '@angular-eslint/template/extract-inline-html'
		},
		{
			files: [
				'*.component.html'
			],
			parser: '@angular-eslint/template-parser',
			parserOptions: {
			  project: './tsconfig.app.json',
			  ecmaVersion: 2020,
			  sourceType: 'module'
			},
			rules: {
				'@angular-eslint/template/banana-in-a-box': 'error',
				'@angular-eslint/template/cyclomatic-complexity': 'error',
				'@angular-eslint/template/no-call-expression': 'error',
				'@angular-eslint/template/no-negated-async': 'error'
			},
			plugins: [
				'@angular-eslint/template'
			]
		},
		{
			'files': [
				'src/**/*.spec.ts', 'src/**/*.d.ts'
			],
			'parser': '@typescript-eslint/parser',
			'parserOptions': {
			  project: './tsconfig.spec.json',
			  ecmaVersion: 2020,
			  sourceType: 'module'
			},
			'extends': [
				'plugin:@typescript-eslint/recommended',
				'@quantumly',
				'plugin:jasmine/recommended'
			],
			'plugins': [
				'jasmine',
				'@typescript-eslint'
			],
			'env': {
				jasmine: true
			}
		},
		{
			files: [
				'e2e/src/**/*.e2e-spec.ts',
				'e2e/src/**/*.po.ts'
			],
			parserOptions: {
				ecmaVersion: 2020,
				sourceType: 'module',
				project: './e2e/tsconfig.json'
			},
			env: {
				protractor: true
			}
		}
	]
};

module.exports = config;
export default config;
