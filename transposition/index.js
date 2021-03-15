// Given a string, return true or false depending if the string
// is a palindrome.  Palindromes are words that read the same backwards
// and forwards. Make sure it is case insensitive!
// --- Examples:
//   palindrome("Madam") === true
//   palindrome("love") === false

function transposition(first, second) {
  if (first.length !== second.length) return false;
  let isTransition = true;

  first.split('').forEach((letter) => {
    if (!second.includes(letter)) {
      isTransition = false;
    }
  });

  return isTransition;
}

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

describe("Palindrome", () => {
  it('"dog" and "dgo" is a transposition', () => {
    assert.equal(transposition("dog", "dgo"), true);
  });
  it('"dog" and "dfo" is not a transposition', () => {
    assert.equal(transposition("dog", "dfo"), false);
  });
  it('"dogs" and "dgo" is not a transposition', () => {
    assert.equal(transposition("dogs", "dgo"), false);
  });
  it('"doog" and "ddog" is not a transposition', () => {
    assert.equal(transposition("dogs", "dgo"), false);
  });
});

mocha.run();
