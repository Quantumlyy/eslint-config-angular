export const config = {
	'env': {
		browser: true,
		protractor: true,
		jasmine: true
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
		'@angular-eslint/template',
		'@angular-eslint',
		'@typescript-eslint'
	],
	'overrides': [
		{
			files: ['*.component.html'],
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
			plugins: ['@angular-eslint/template']
		}
	]
};

module.exports = config;
export default config;
