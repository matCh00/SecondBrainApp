import React from 'react';
import { useParams } from 'react-router-dom';
import './notesPage.css';

const NotesPage = () => {

  let { id } = useParams();

  return (
    <div>{id}</div>
  )
};

export default NotesPage;