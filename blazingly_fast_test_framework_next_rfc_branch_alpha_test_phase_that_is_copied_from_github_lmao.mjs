// Start with an iffe and expose the public variable on global
// "it" function defines the test case
export function it(desc, fn) {
    //encapsulate the fn call in try/catch block so that testing does not stop if one test fails
    try {
        fn()
        // If the test case passes then log the test case description in the browser console with a checkmark
        console.log('\x1b[32m%s\x1b[0m', '\u2714 ' + desc)
    } catch (error) {
        // log the error on the console with an 'x'
        console.log('\n')
        console.log('\x1b[31m%s\x1b[0m', '\u2718 ' + desc)
        console.error(error)
        console.log('\n')
    }
}

export function assert(isTrue) {
    if (!isTrue) {
        throw new Error()
    }
}
