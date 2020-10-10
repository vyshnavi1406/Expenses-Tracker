import React, { useContext } from 'react';
import { TransactionComponents } from './TransactionComponents';
import { GlobalContext } from '../Context/GlobalState';

export const TransalationListComponents = () => {
    const { transactions } = useContext(GlobalContext);
 return (
        <div>
            <h3>History</h3>
            <ul className="list">
           { transactions.map(transaction => (<TransactionComponents key={transaction.id} transaction={transaction}/>))}
            </ul>
        </div>
    )
}
/*import React, { useContext }  from 'react';
import { TransactionComponents } from './TransactionComponents';
import { GlobalContext } from '../Context/GlobalState';
export const TransalationListComponents = () => {
     const { transactions }= useContext(GlobalContext);
        return (
        <div>
            <h3>History</h3>
         <ul className="list">
       { transactions.map(transaction => (<TransactionComponents key={transaction.id} transaction={transaction}/>))}
         </ul>
        </div>
        )
}*/