const api = {};
api.hello = function () {
    console.log('Hello module');
}

api.bong = function () {
    console.log('Im bong');
}

module.exports = api;