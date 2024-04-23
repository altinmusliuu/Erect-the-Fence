function getOuterTrees(trees) {
    trees.sort((element1, element2) => {
        if (element1.x === element2.x) return element1.y - element2.y;
        return element1.x - element2.x;
    });
    let upper = [], lower = [];

    for (const tree of trees) {
        while (upper.length >= 2 && compare(upper[upper.length - 2], upper[upper.length - 1], tree) >= 0) upper.pop();
        while (lower.length >= 2 && compare(lower[lower.length - 2], lower[lower.length - 1], tree) <= 0) lower.pop();
        upper.push(tree);
        lower.push(tree);
    }

    upper.sort((a, b) => {
        return b.x - a.x;
    });

    let outer = [];
    outer['lower'] = lower;
    outer['upper'] = upper;

    let lowerHalf = Math.floor(lower.length / 2);
    let leftLower = lower.slice(0, lowerHalf);
    let rightLower = lower.slice(lowerHalf)

    let upperHalf = Math.ceil(upper.length / 2);
    let leftUpper = upper.slice(0, upperHalf);
    let rightUpper = upper.slice(upperHalf);


    outer['lower_left'] = leftLower;
    outer['lower_right'] = rightLower;
    outer['upper_right'] = leftUpper;
    outer['upper_left'] = rightUpper;
    outer['all'] = [...new Set(lower.concat(upper))];
    return outer;
};

const compare = (p1, p2, p3) => {
    return (p3.y - p2.y) * (p2.x - p1.x) - (p2.y - p1.y) * (p3.x - p2.x);
};
