export const sortTickets = (tickets, preference) => {
  switch (preference) {
    case 'h-l':
      return [...tickets].sort(
        (a, b) => b.priority.localeCompare(a.priority)
      );
    case 'l-h':
      return [...tickets].sort(
        (a, b) => a.priority.localeCompare(b.priority)
      );
    default:
      return tickets;
  }
}
