const crypto = require('crypto')

const start = Date.now()
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('%c 1:', 'background: red', Date.now() - start)
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('%c 2:', 'background: blue', Date.now() - start)
})
//  1: 590
//  2: 601

// they are going to run in paralell
// if it was a single thread we should see one after another with the duplicated time