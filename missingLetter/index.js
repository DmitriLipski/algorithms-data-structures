// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
//
//     You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.
// Example:
//
//     ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'
function findMissingLetter(array) {
    const charCodeArray = array.map((letter) => letter.charCodeAt(0));
    let missingCharCode = null;
    for (let i = 0; i < charCodeArray.length; i++) {
        if (charCodeArray[i] !== (charCodeArray[i + 1] - 1)) {
            missingCharCode = charCodeArray[i] + 1;
            break;
        }
    }
    return String.fromCharCode(missingCharCode);
}

console.log("result =>", findMissingLetter(['a','b','c','d','f']));
// _________ _______  _______ _________   _______  _______  _______  _______  _______
// \__   __/(  ____ \(  ____ \\__   __/  (  ____ \(  ___  )(  ____ \(  ____ \(  ____ \
//    ) (   | (    \/| (    \/   ) (     | (    \/| (   ) || (    \/| (    \/| (    \/
//    | |   | (__    | (_____    | |     | |      | (___) || (_____ | (__    | (_____
//    | |   |  __)   (_____  )   | |     | |      |  ___  |(_____  )|  __)   (_____  )
//    | |   | (            ) |   | |     | |      | (   ) |      ) || (            ) |
//    | |   | (____/\/\____) |   | |     | (____/\| )   ( |/\____) || (____/\/\____) |
//    )_(   (_______/\_______)   )_(     (_______/|/     \|\_______)(_______/\_______)
//                             ____       _
//                             |  _ \     | |
//                             | |_) | ___| | _____      __
//                             |  _ < / _ \ |/ _ \ \ /\ / /
//                             | |_) |  __/ | (_) \ V  V /
//                             |____/ \___|_|\___/ \_/\_/
//                         ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

mocha.setup("bdd");
const { assert } = chai;

describe("findMissingLetter", () => {
    it("gets correct answer", () => {
        assert.equal(findMissingLetter(['a','b','c','d','f']), 'e');
        assert.equal(findMissingLetter(['O','Q','R','S']), 'P');
    });
});

mocha.run();
