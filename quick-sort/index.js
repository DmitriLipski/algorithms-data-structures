// Implement quick-sort.

function quickSort(list) {
  if (list.length < 2) return  list;
  if (list.length === 2) {
    return  list[0] < list[1] ? [list[0], list[1]] : [list[1], list[0]];
  }
  const pivot = list[Math.floor(Math.random() * list.length)];
  const less = [];
  const greater = [];

  list.forEach((item) => {
    if (item < pivot) {
      less.push(item)
    } else if (item > pivot){
      greater.push(item)
    }
  });

  return [ ...quickSort(less), pivot, ...quickSort(greater)]
}

console.log('result =>', quickSort([7, 10, 3, 5, 3, 12]));

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

describe("Vowels", () => {
  it("sorts correct array with some values", () => {
    assert.deepEqual(quickSort([7, 10, 3, 5, 12]), [3, 5, 7, 10, 12]);
  });
  it("sorts correct array with duplicates", () => {
    assert.deepEqual(quickSort([20, 5, 3, 2, 7, 3]), [2, 3, 3, 5, 7, 20]);
  });
});

mocha.run();
