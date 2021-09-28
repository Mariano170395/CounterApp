const deposit = () =>{
    return(
        {
            type:'Deposit money',
            payload: 10,
        }
    )
}

const withdraw = () =>{
    return(
        {
            type:'Withdraw money',
            payload: -10,
        }
    )
}


export {deposit, withdraw}