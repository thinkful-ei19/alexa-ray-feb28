const api = (function() {
    const BASE_URL = 'https://thinkful-list-api.herokuapp.com/alexa-ray';
    const getItems = function(callback) {
        callback('api module works!');
    }
    
    return {
        getItems
    };

}());