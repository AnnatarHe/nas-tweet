;(function() {
    var NebPay = require("nebpay");     //https://github.com/nebulasio/nebPay

    var nebPay = new NebPay()
    console.log(window.NAS_SONG_CONFIG)

    if (typeof webExtensionWallet === "undefined") {
        $('#extension-alert').show()
    }

    const serialNumber = nebPay.simulateCall(window.NAS_SONG_CONFIG.CONTRACT_ADDRESS, 0, "get", '["demo-test"]', {    //使用nebpay的simulateCall接口去执行get查询, 模拟执行.不发送交易,不上链
        listener: function(resp) {
            console.log("get", resp)
        }
    });
    $('#refrash').on('click', function () {
        
        nebPay.queryPayInfo(serialNumber).then(res => {
            console.log(res)
        })
    })

    $("#save").on('click', function(e) {
        const args = '["demo-test", "demo-test", "url-test"]'
        nebPay.call(window.NAS_SONG_CONFIG.CONTRACT_ADDRESS, 0, "save", args, {
            listener: function(resp) {
                console.log(resp)
            }
        })
    })

})();

