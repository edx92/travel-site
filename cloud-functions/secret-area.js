exports.handler = function (event, context, callback) {
    callback(null, {
        statusCode: 200,
        body: "Welcom to the super secret area"
    });
}