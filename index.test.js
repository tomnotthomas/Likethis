
const likeThis = require ('./index.js')

it('Output should be: "Fred likes this', () => {
        const nobody = likeThis(["Fred"]);
        console.log (nobody)
        expect(nobody).toEqual("Fred likes this")
    
    })

it('Output should be: "Fred and Jerry like this', () => {
        const nobody = likeThis(["Fred", "Jerry"]);
        console.log (nobody)
        expect(nobody).toEqual("Fred and Jerry like this")
    
    })

it('Output should be: "Fred, Jerry and Thomas like this', () => {
        const nobody = likeThis(["Fred", "Jerry", "Thomas"]);
        console.log (nobody)
        expect(nobody).toEqual("Fred, Jerry and Thomas like this")
        
    })

    it('Output should be: "Fred, Jerry and 3 others like this', () => {
        const nobody = likeThis(["Fred", "Jerry", "Frank", "Sarah", "Thomas"]);
        console.log (nobody)
        expect(nobody).toEqual("Fred, Jerry and 3 others like this")
        
    })

