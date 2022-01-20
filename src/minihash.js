/**
 * Creates sequense of symbols that are NOT quaranteed to be unique
 *
 * @param {number} length - length of minihash
 * @param {string} include - l: lowercase, u: uppercase: n: number, s: special ex. 'luns'
 * @returns {string} - sequence of random symbols
 *
 */

export const minihash = (length = 10, include = 'luns') => {
	let chars,
		c,
		r = ''

	chars = {
		l: 'abcdefghijklmnopqrstuvwxyz',
		u: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
		n: '0123456789',
		s: '-._~',
	}

	c = [...include].map(_ => chars[_]).join('')

	while (length--) r += c.charAt(Math.floor(Math.random() * c.length))

	return r
}
