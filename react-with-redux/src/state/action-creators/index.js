export const depositMoney = (amount) =>
{
    return  {
        type: "Deposit",
        payload: amount
    }
}

export const withdrawMoney = (amount) => {
    return  {       
        type: "Withdraw",
        payload: amount
    }
}