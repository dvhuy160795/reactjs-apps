/**
 * input : res, req
 * output : data responsive of request [statusCode, body]
 */

let executeRoute =  (req, res, listRouters) => {
    let method = req.method;

    let getData = (func) => {
        if (typeof func === "function") {
            return func();
        }
    };

    let postData = () => {
        console.log("get" + method);
        if (!methodChecker(method,"post")) {
            return "Page not found";
        }
    };

    let putData = () => {
        console.log("get" + method);
        if (!methodChecker(method,"put")) {
            return "Page not found";
        }
    };

    let deleteData = () => {
        console.log("get" + method);
        if (!methodChecker(method,"delete")) {
            return "Page not found";
        }
    };

    let methodChecker = (method, expectedMethod) => {
        return method.toLowerCase() === expectedMethod.toLowerCase();
    };

    let data = null;
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