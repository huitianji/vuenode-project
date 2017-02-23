//"use static"

$.post(
    "json/one.json",
    {t:Math.random()},
    function (data) {
        dataFun (data);
    },
    "json"
);
function dataFun (data) {
    var app = new Vue({
        el: '#app',
        data: data
    });
};
