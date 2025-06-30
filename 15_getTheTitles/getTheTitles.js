const getTheTitles = function(array) {
    const titles = [];
    for (const obj of array) {
        if ('title' in obj) {
            titles.push(obj.title);
        };
    }
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
