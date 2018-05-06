;(function() {
    var NebPay = require("nebpay");     //https://github.com/nebulasio/nebPay
    var nebPay = new NebPay()

    $("#save").on('click', function(e) {
        nebPay.call(window.NAS_SONG_CONFIG.CONTRACT_ADDRESS, 0, "save", {
            title: "demo-test", author: "demo-test", url: "url-test"
        }, {
            listener: function(resp) {
                console.log(resp)
            }
        })
    })

})();

