import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './notesPage.css';
import { getNotes } from '../../backend/api';
import { types } from '../../models/Types';
import { INoteGroup } from '../../models/INote';
import { Card } from 'primereact/card';
import Editor from "@monaco-editor/react";
import { Fieldset } from 'primereact/fieldset';

const NotesPage = () => {

  const [notes, setNotes] = useState<INoteGroup[]>([]);
  const [notesFiltered, setNotesFiltered] = useState<INoteGroup[]>([]);

  let { id } = useParams();

  /** po każdej zmianie params */
  useEffect (() => {
    getNotes(types.find(t => t.name === id)?.value!).then(
      (res) => {
        setNotes(res);  
        setNotesFiltered(res); 
        console.log(res); 
      }
    )
  }, [id]);

  return (
    <div className='p-5'>
      {notesFiltered.map(n => {
        return (
          <Card title={n.name} key={n.name} className='mb-5'>

              {n.codes.map((i, index) => {
                return (

                  <Fieldset legend={i.language} key={i.code + index} className='mb-3'>
                    <Editor
                      language={i.language}
                      value={i.code}
                      theme='vs-dark'
                      className='resize'
                    />
                  </Fieldset>
                )
              })}
          </Card>
        )
      })}
    </div>
  )
};

export default NotesPage;