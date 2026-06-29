function payWithPaystack() {

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;
    let offeringType = document.getElementById("offeringType").value;
    let prayerRequest = document.getElementById("prayerRequest").value;
    let amount = document.getElementById("amount").value;

    if (!name || !phone || !amount) {
        alert("Please fill required fields");
        return;
    }

    let handler = PaystackPop.setup({
        key: "pk_test_f050242687bb1b2c2d779419bfda6cd08aba9587",
        email: phone + "vugo2040@gmail.com",
        amount: amount * 100,
        currency: "NGN",

        metadata: {
            custom_fields: [
                { display_name: "Name", value: name },
                { display_name: "Phone", value: phone },
                { display_name: "Address", value: address },
                { display_name: "Offering Type", value: offeringType },
                { display_name: "Prayer Request", value: prayerRequest }
            ]
        },

        callback: function(response) {

            document.body.innerHTML = `
                <div style="text-align:center; margin-top:120px;">
                    <h1 style="color:green;">Give, and it will be given to you. A good measure, pressed down, shaken together and running over, will be poured into your lap." — Luke 6:38 </h1>
                    <p>Transaction successful</p>
                    <p>Ref: ${response.reference}</p>
                </div>
            `;
        },

        onClose: function() {
            alert("Payment cancelled");
        }
    });

    handler.openIframe();
}