import { terser } from 'rollup-plugin-terser'

export default [
	{
		input: 'src/minihash.js',
		output: {
			file: 'dist/minihash.cjs',
			format: 'cjs',
		},
	},
	{
		input: 'src/minihash.js',
		output: {
			file: 'dist/minihash.js',
			format: 'esm',
		},
	},
	{
		input: 'src/minihash.js',
		output: {
			file: 'dist/minihash.min.js',
			format: 'esm',
			plugins: [terser()],
		},
	},
]
