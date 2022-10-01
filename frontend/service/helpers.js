class Helpers {
    getOrderStatusUpdateBtn(statusMessage){
        const orderStatus = ["Pending", "Confirmed", "Cooking"];
        return orderStatus.includes(statusMessage);
    }
}

export default new Helpers();
