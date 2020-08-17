export const config = {
	'env': {
		es6: true,
		es2017: true,
		es2020: true,
		node: true,
		jest: true
	},
	'extends': 'plugin:@typescript-eslint/recommended',
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		ecmaVersion: 2020,
		sourceType: 'module',
		project: './tsconfig.eslint.json'
	},
	'plugins': ['@typescript-eslint'],
	'rules': {
	}
};

module.exports = config;
export default config;
