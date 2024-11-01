import React, { useState } from "react";

const TicketForm = () => {
  const [title, setTitle] = useState('');

  const [description, setDescription] = useState('');

  const [prority, setPriority] = useState(1);

  const priorityLabels = {
    1: 'Low',
    2: 'Medium',
    3: 'High',
  };

  const clearForm = () => {
    setTitle('');

    setDescription('');

    setPriority(1);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    clearForm();
  }

  return (
    <form
      className='ticket-form'
      onSubmit={handleSubmit}
    ></form>
  )
}
