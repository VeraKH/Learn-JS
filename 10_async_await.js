function orderPizza(){
    return new Promise((resolve, reject) => {
        let isReady = true;

        setTimeout(() => {
            if (isReady){
                resolve("Your pizza is ready");
            } else {
                reject("Pizza is over, sorry");
            }
        }, 2000);

    });
}


async function deliveryOrder(){
    console.log("Thank you for your order. We will check ingredients");
    try{
    const pizza = await orderPizza();
    console.log(pizza);
    } catch (error){
        console.log(error);
    }
}

deliveryOrder();