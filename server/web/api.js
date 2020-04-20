const router = require('./route.js');
const listRouters = {
    "get_images" : route(
        "get",
        "get_images?a=1",
        "ImagesController@getImages")
    ,
    "get_image" : route(
        "get",
        "/get_images",
        () => {return("get_imageget_imageget_imageget_image")}),
    "post_image" : route(
        "post",
        "/post_image",
        "ImagesController@postImage")
};
function route(method, url, func) {
    return {method: method, url: url, func: func};
}

function getResponsive(req, res) {
    return router.executeRoute(req, res, listRouters);
}
exports.getResponsive = getResponsive;
