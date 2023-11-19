const removeFromArray = function(array, ...args) {
    //No need to explicitly create args because rest parameters already contain the arguments in an array form
    //args = Array.from(arguments);
    return array.filter((item) => !args.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
