const database = {
    // we will be using this database to get this html page
    ['index.html']: '<html>Hello Caching!</html>',
};

module.exports.get = (key, callback) => {
    // what this does is after 3000 miliseconds, calls the databse[key] 
    setTimeout(() => {
        callback(database[key]);
    }, 3000);
}


