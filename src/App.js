import './App.css';
import './styles.css';
import React, { useReducer } from "react";
import TicketForm from './components/TicketForm';
import ticketReducer from './reducer/ticket.reducer';
import TicketList from './components/TicketList';

function App() {
  const initialState = {
    tickets: [],
  };

  const [state, dispatch] = useReducer(
    ticketReducer,
    initialState,
  );

  return (
    <div className="App">
      <div className='container'>
        <h1>Bug Blaster</h1>

        <TicketForm dispatch={dispatch} />

        {
          !!state.tickets.length && (
            <>
              <h2>All Tickets</h2>

              <TicketList
                dispatch={dispatch}
                tickets={state.tickets}
              />
            </>
          )
        }
      </div>
    </div>
  );
}

export default App;
