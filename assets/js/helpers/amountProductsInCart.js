export const amountProductsInCart = (cart) => {
    const { amountTotal, priceTotal } = Object.values(cart).reduce(
        (obj, curr) => {
            obj.amountTotal += curr.amount;
            obj.priceTotal += curr.amount * curr.price;
            return obj;
        },
        { amountTotal: 0, priceTotal: 0 }
    );

    return { amountTotal, priceTotal };
};
