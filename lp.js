lpTag.sdes = lpTag.sdes || [];
lpTag.identities = [];
function identityFn(callback) {
    callback({
        iss: "Kartiki",
        acr: "loa1",
        sub: "1292157"
    });
}


lpTag.sdes.push({
    "type": "cart",
    "total": 777,
    "currency": "USD",
    "numItems": "1",
    "products": [{
        "product": {
            "name": "Title : Jewellery Shopping",
            "category": " ",
            "price": " "
        }
    }]
})
lpTag.identities.push(identityFn);
