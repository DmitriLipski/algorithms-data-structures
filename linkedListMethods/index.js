function Node(data, next = null) {
    this.data = data;
    this.next = next;
}

const node3 = new Node(3, null);
const node2 = new Node(3, node3);
const node1 = new Node(2, node2);
const head = new Node(1, node1);

function length(head) {
    let length = head ? 1 : 0;
    let next = head ? head.next : null;
    while(next) {
        length++;
        next = next.next;
    }
    return length;
}

const indexOf = (head, value) => flatten(head).indexOf(value);

function lastIndexOf(head, value) {
    const flattenArr = flatten(head);
    const indexInReversedArr = flattenArr.reverse().indexOf(value);
    return indexInReversedArr < 0 ? -1 : flattenArr.length - 1 - indexInReversedArr
}

const flatten = (node) =>
    node ? [node.data].concat(flatten(node.next)) : [];

console.log("lastIndexOf =>", lastIndexOf(head, 3));

function sayHello() {
    console.log("Hello")
}

const func = sayHello;
func.something = 42;

console.log("test =>", sayHello.something)

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

// mocha.setup("bdd");
// const { assert } = chai;
//
// describe("sortZero", () => {
//     it("gets correct answer", () => {
//         assert.deepEqual(sortZero([1, true, 0, "text", false, 0]), [1, true, "text", false, 0, 0]);
//         assert.deepEqual(sortZero([1, 0, 5, 10, 5]), [1, 5, 10, 5, 0]);
//         assert.deepEqual(sortZero(["a", [], "b", 0, "c", null, 0, "f"]), ["a", [], "b", "c", null, "f", 0, 0]);
//     });
// });
//
// mocha.run();
