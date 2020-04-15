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
        return controller[func.split("@")[1]]();
    };

    let loadDataByRequest = (func) => {
        if (typeof func === "function") {
            data.body = func();
        } else if(typeof func === "string") {
            data.body = loadController(func);
        }

        if (!data.body) {
            data.body = "";
        }
        return data;
    }

    let getData = (func) => {
        if (!methodChecker(method,"get")) {
            return "Page not found";
        }

        return loadDataByRequest(func);
    };

    let postData = (func) => {
        if (!methodChecker(method,"post")) {
            return "Page not found";
        }

        return loadDataByRequest(func);
    };

    let putData = (func) => {
        console.log("get" + method);
        if (!methodChecker(method,"put")) {
            return "Page not found";
        }
        return loadDataByRequest(func);
    };

    let deleteData = (func) => {
        console.log("get" + method);
        if (!methodChecker(method,"delete")) {
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
                data = getData(listRouters[url].func);
                break;
            case "post":
                data = postData();
                break;
            case "put":
                data = putData();
                break;
            case "delete":
                data = deleteData();
                break;
            default:
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