//Constants    Cause when change something with them change only in one place the(Constants)
    const WITHDRAW_MONEY="WITHDRAW_MONEY";
    const DEPOSITE_MONEY="DEPOSITE_MONEY";

//Action Creators
// const action={
//     type:"WITHDRAW_MONEY"      
// }
    //HardCoded Way  we can make it more dynamic using function below
const withDraw = (amount) =>{                                    
    return {
        type: WITHDRAW_MONEY ,     //Name of action
        payload:amount             //Dynamic Data passed when dispatch function is written
    }
}
const deposite = (amount) =>{                                    
    return {
        type: DEPOSITE_MONEY, 
        payload:amount
    }
}
//Reducres
const reducer=(state=1000,action)=>{
    switch(action.type){
        case WITHDRAW_MONEY:
            return state- action.payload;  //the payload amount is passed by dispatch function 
        case DEPOSITE_MONEY:            //In case of deposite plus the money
            return state+ action.payload;  
            default:
                return state;
    }
}
//Store Creation From Redux
const store=Redux.createStore(reducer);
store.subscribe(()=>{           //after each dispatch subscribe will return the new state but , get state only render one time 
    console.log("Current State", store.getState());
})
