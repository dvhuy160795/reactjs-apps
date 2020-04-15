const router = require('./route.js');
const listRouters = {
    "get_images" : route(
        "get",
        "/get_images",
        () => {})
    ,
    "get_image" : route(
        "get",
        "/get_images",
        () => {})
};
function route(method, url, func) {
    return {method: "get", url: url, func: func};
};

function getResponsive(req, res) {
    let body = "";
    let statusCode = 200;
    console.log(router.executeRoute(req, res, listRouters));
    let resData = {
        statusCode : statusCode,
        body : body
    };
    return resData;
}
exports.getResponsive = getResponsive;
