import './App.css';
import './styles.css';
import React, { useReducer } from "react";
import { sortTickets } from './utilities/sortingUtilities';
import TicketForm from './components/TicketForm';
import ticketReducer from './reducer/ticket.reducer';
import TicketList from './components/TicketList';

function App() {
  const initialState = {
    tickets: [],
    editingTicket: null,
    sortPreference: 'h-l'
  };

  const [state, dispatch] = useReducer(
    ticketReducer,
    initialState,
  );

  const sortedTickets = sortTickets(state.tickets, state.sortPreference);

  return (
    <div className="App">
      <div className='container'>
        <h1>Bug Blaster</h1>

        <TicketForm
          dispatch={dispatch}
          editingTicket={state.editingTicket}
        />

        {
          !!state.tickets.length && (
            <>
              <h2>All Tickets</h2>

              <select
                value={state.sortPreference}
                onChange={(event) => dispatch({
                    type: 'SET_SORTING',
                    payload: event.target.value,
                  })}
              >
                <option value='h-l'>High to Low</option>
                <option value='l-h'>Low to High</option>
              </select>

              <TicketList
                dispatch={dispatch}
                tickets={sortedTickets}
              />
            </>
          )
        }
      </div>
    </div>
  );
}

export default App;
