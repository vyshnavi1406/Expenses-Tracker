import React from 'react';
import './App.css';
import { HeaderComponents } from './Components/HeaderComponents';
import { BalanceComponents } from './Components/BalanceComponents';
import { IncomeExpensesComponents } from './Components/IncomeExpensesComponents';
import { TransalationListComponents } from './Components/TransalationListComponents';
import { AddTransactionComponents } from './Components/AddTransactionComponents';
import { GlobalProvider } from './Context/GlobalState';

function App() {
  return (
      <GlobalProvider>
           <HeaderComponents/>
          <div className="container">
         <BalanceComponents/>
         <IncomeExpensesComponents/>
         <TransalationListComponents/>
         <AddTransactionComponents/>
         </div>
      </GlobalProvider>
     );
}

export default App;



