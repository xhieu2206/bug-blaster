import React, { useEffect, useState } from "react";

const TicketForm = ({ dispatch, editingTicket }) => {
  const [title, setTitle] = useState('');

  const [description, setDescription] = useState('');

  const [priority, setPriority] = useState('1');

  const priorityLabels = {
    '1': 'Low',
    '2': 'Medium',
    '3': 'High',
  };

  const clearForm = () => {
    setTitle('');

    setDescription('');

    setPriority('1');
  }

  useEffect(() => {
    if (!editingTicket) return;

    setTitle(editingTicket.title);

    setDescription(editingTicket.description);

    setPriority(editingTicket.priority);
  }, [editingTicket]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const ticketData = {
      id: new Date().toISOString(),
      title,
      description,
      priority,
    }

    if (!!editingTicket) {
      dispatch({
        type: 'UPDATE_TICKET',
        payload: {
          title,
          description,
          priority,
          id: editingTicket.id,
        }
      });

      clearForm();

      return;
    }

    dispatch({
      type: 'ADD_TICKET',
      payload: ticketData,
    });

    clearForm();
  }

  const handleCancel = () => {
    clearForm();

    dispatch({
      type: 'CLEAR_EDITING_TICKET',
    })
  }

  return (
    <form
      className='ticket-form'
      onSubmit={handleSubmit}
    >
      <div>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </div>

      <div>
        <label>Description</label>
        <textarea
          value={description}
          onChange={e => setDescription(e.target.value)}
        ></textarea>
      </div>

      <fieldset className='priority-fieldset'>
        <legend>Priority</legend>

        {
          Object.entries(priorityLabels).map(
            ([value, label]) => (
              <label key={value} className='priority-label'>
                <input
                  className='priority-input'
                  type='radio' value={value}
                  checked={priority === value}
                  onChange={(e) => setPriority(e.target.value)}
                />
                { label }
              </label>
            )
          )
        }
      </fieldset>

      <button type='submit' className='button'>Submit</button>
      {
        editingTicket && (
          <button type='submit' className='button' onClick={() => handleCancel()}>Cancel Edit</button>
        )
      }
    </form>
  )
}

export default TicketForm;
