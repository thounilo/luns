/**
 *
 * Creates sequence of symbols that can be used in frontend ex. html attributes or css classes
 *
 * @param {number} [length] - length on sequence
 * @param {string} [include] - l: lowercase, u: uppercase, n: number, s, special ex. 'luns'
 * @param {string} [prefix]
 * @returns {string} - sequence of random symbols
 *
 */

const luns = (length = 10, include = 'luns', prefix) => {
    let chars,
        c,
        r = '',
        // @ts-ignore
        len = parseInt(length)

    include = include ?? 'luns'
    chars = {
        l: 'abcdefghijklmnopqrstuvwxyz',
        u: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        n: '0123456789',
        s: '-_',
    }

    c = [ ...include ].map(_ => chars[ _ ]).join('')

    while (length--) r += c.charAt(Math.floor(Math.random() * c.length))
    return prefix && typeof prefix === 'string' ? r.padStart(len + prefix.length, prefix) : r
}

export default luns

