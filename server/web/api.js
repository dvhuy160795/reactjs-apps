const router = require('./route.js');
const listRouters = {
    "get_images" : route(
        "get",
        "/get_images",
        "ImagesController@getImages")
    ,
    "get_image" : route(
        "get",
        "/get_images",
        () => {return("get_imageget_imageget_imageget_image")})
};
function route(method, url, func) {
    return {method: "get", url: url, func: func};
};

function getResponsive(req, res) {
    return router.executeRoute(req, res, listRouters);
}
exports.getResponsive = getResponsive;
