const ticketReducer = (state, { type, payload }) => {
  switch (type) {
    case 'ADD_TICKET':
      return {
        ...state,
        tickets: [...state.tickets, payload],
      }
    case 'SELECT_TICKET_FOR_EDITING':
      return {
        ...state,
        editingTicket: payload,
      }
    case 'CLEAR_EDITING_TICKET':
      return {
        ...state,
        editingTicket: null,
      }
    case 'UPDATE_TICKET':
      const ticketIndex = state.tickets.findIndex(
        ({ id }) => id === payload.id,
      );

      const tickets = [
        ...state.tickets,
      ];

      tickets[ticketIndex] = {
        ...payload
      }

      return {
        ...state,
        tickets,
        editingTicket: null,
      }
    case 'DELETE_TICKET':
      const isDeletingEditingTicket = state.editingTicket?.id === payload.id;

      return {
        ...state,
        tickets: state.tickets.filter(
          ({ id }) => id !== payload.id,
        ),
        ...(isDeletingEditingTicket && {
          editingTicket: null,
        }),
      }
    case 'SET_SORTING':
      return {
        ...state,
        sortPreference: payload,
      }
    default:
      return state;
  }
}

export default ticketReducer;
