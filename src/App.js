
// Expense Tracker Start
import './App.css';
import AddTransaction from './business_tracker/components/AddTransaction';
import Balance from './business_tracker/components/Balance';
import Header from './business_tracker/components/Header';
import IncomeExpenses from './business_tracker/components/IncomeExpenses';
import TransactionList from './business_tracker/components/TransactionList';

import { GlobalProvider } from './business_tracker/context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <div className="body">
          <Header />
        </div>
        <div className="containers">
        <div className='firstContainer'>
          <Balance />
          <AddTransaction />
        </div>
        <div className="secondContainer">
          <IncomeExpenses />
          <TransactionList />
       </div>
      </div>
      </div>
    </GlobalProvider>

  );
}

export default App;

// Expense Tracker End



