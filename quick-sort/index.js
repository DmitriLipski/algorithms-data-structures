// Implement quick-sort.

function quickSort(list) {
  if (list.length === 0) return  [];
  const pivot = list[0];
  const less = [];
  const greater = [];

  list.slice(1).forEach((item) => {
    if (item < pivot) {
      less.push(item)
    } else {
      greater.push(item)
    }
  });

  return [...quickSort(less), pivot, ...quickSort(greater)]
}

function quicksort(array) {
  if (array.length === 0) return [];

  const left = [], right = [], pivot = array[0];

  for (let i = 1; i < array.length; i++) {
    if(array[i] < pivot)
      left.push(array[i]);
    else
      right.push(array[i]);
  }

  return quicksort(left).concat(pivot, quicksort(right));
}

console.log('result =>', quickSort([7, 10, 3, 5, 3, 12, 3]));

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
    assert.deepEqual(quickSort([5, 20, 5, 3, 2, 7, 3]), [2, 3, 3, 5, 5, 7, 20]);
  });
});

mocha.run();
