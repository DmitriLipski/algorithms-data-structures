const Cat = function(name, weight) {
    if (!weight) throw new Error("no weight is specified");
    this._weight = weight;
    Cat.cats.push(this);

    Object.defineProperty(this, 'name', {
        value: name,
    });

    Object.defineProperty(this, 'weight', {
        get() {
            return this._weight;
        },
        set(value) {
            return this._weight = value;
        }
    });
};

Cat.cats = [];

Cat.averageWeight = function() {
    return (Cat.cats.reduce((weight, cat) => {
        return weight + cat.weight;
    }, 0)) / Cat.cats.length;
};
