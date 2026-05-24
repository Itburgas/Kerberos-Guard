module.exports = async function (context, req) {
    context.res = {
        headers: {
            "Content-Type": "application/json"
        },
        body: {
            success: true,
            message: "API OK"
        }
    };
};
