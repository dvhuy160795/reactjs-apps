/**
 * input : res, req
 * output : data responsive of request [statusCode, body]
 */

let executeRoute =  (req, res, listRouters) => {
    let method = req.method;

    let data = {
        "body" : "",
        "statusCode" : 200
    };

    let loadController = (func) => {
        const controller = require("../http/Controller/" + func.split("@")[0]);
        return controller[func.split("@")[1]](req);
    };

    let loadDataByRequest = (func,req) => {
        if (typeof func === "function") {
            data.body = func(req);
        } else if(typeof func === "string") {
            data.body = loadController(func);
        }

        if (!data.body) {
            data.body = "";
        }
        return data;
    };

    let getData = (func, expectedMethod) => {
        if (!methodChecker(method,expectedMethod)) {
            return "Page not found";
        }

        return loadDataByRequest(func);
    };

    let postData = (func, expectedMethod) => {

        if (!methodChecker(method,expectedMethod)) {
            return "Page not found";
        }
        console.log(req.params);
        return loadDataByRequest(func);
    };

    let putData = (func, expectedMethod) => {
        console.log("get" + method);
        if (!methodChecker(method,expectedMethod)) {
            return "Page not found";
        }
        return loadDataByRequest(func);
    };

    let deleteData = (func, expectedMethod) => {
        console.log("get" + method);
        if (!methodChecker(method,expectedMethod)) {
            return "Page not found";
        }
        return loadDataByRequest(func);
    };

    let methodChecker = (method, expectedMethod) => {
        return method.toLowerCase() === expectedMethod.toLowerCase();
    };

    let url = req.url;
    url = url.split("/").filter(function (text) {
        return text !== "";
    });
    url = url.join("/");
    if (listRouters[url]) {
        switch (method.toLowerCase()) {
            case "get":
                data = getData(listRouters[url].func, listRouters[url].method);
                break;
            case "post":
                data = postData(listRouters[url].func, listRouters[url].method);
                break;
            case "put":
                data = putData();
                break;
            case "delete":
                data = deleteData();
                break;
            default:
                data = {message : "Method not found!"};
                console.log("Method not found!");
                break;
        }
        return data;
    } else {
        console.log("Url not found!");
    }

    return data;
}

exports.executeRoute = executeRoute;