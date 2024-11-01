const ticketReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TICKET':
      return {
        ...state,
        tickets: [...state.tickets, action.payload],
      }
    case 'UPDATE_TICKET':
      const ticketIndex = state.tickets.findIndex(
        ({ id }) => id === action.payload.id,
      );

      const tickets = [
        ...state.tickets,
      ];

      tickets[ticketIndex] = {
        ...action.payload
      }

      return {
        ...state,
        tickets,
      }
    case 'DELETE_TICKET':
      return {
        ...state,
        tickets: state.tickets.filter(
          ({ id }) => id !== action.payload.id,
        ),
      }
    default:
      return state;
  }
}

export default ticketReducer;
