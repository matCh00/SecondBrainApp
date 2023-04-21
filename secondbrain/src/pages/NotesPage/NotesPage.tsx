import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import './notesPage.css';
import { getNotes } from '../../backend/api';
import { types } from '../../models/Types';
import { INoteGroup } from '../../models/INote';
import { Card } from 'primereact/card';
import Editor, { Monaco } from "@monaco-editor/react";
import { editor } from 'monaco-editor';
import { InputText } from 'primereact/inputtext';
import { Fieldset } from 'primereact/fieldset';

const NotesPage = () => {

  const [notes, setNotes] = useState<INoteGroup[]>([]);
  const [notesFiltered, setNotesFiltered] = useState<INoteGroup[]>([]);

  const [searchValue, setSearchValue] = useState<string>('');

  let { id } = useParams();


  const monacoRef = useRef<editor.IStandaloneCodeEditor | null>(null);

  function handleEditorWillMount(monaco: Monaco) {
    monaco.languages.typescript?.typescriptDefaults?.setDiagnosticsOptions({
      noSemanticValidation: true,
      noSyntaxValidation: true,
    });
  }

  function handleEditorDidMount(editor: editor.IStandaloneCodeEditor, monaco: Monaco) {
    monacoRef.current = editor;
  }
  

  /** po każdej zmianie params */
  useEffect (() => {
    getNotes(types.find(t => t.name === id)?.value!).then(
      (res) => {
        setNotes(res);  
        setNotesFiltered(res); 
      }
    )
  }, [id]);


  /** filtracja */
  const handleSearch = (e: string) => {
    if (!e || e.length < 1) {
      setNotesFiltered(notes);
      return;
    }
    let tempNotes = notes.filter(n => n.name.toLowerCase().includes(e.toLowerCase()));
    setNotesFiltered(tempNotes);
  }


  return (
    <div className='p-5'>
      <InputText onChange={(e) => handleSearch(e.target.value)} placeholder='Find' className='w-full'/>

      {notesFiltered.map(n => {
        return (
          <Card title={n.name} key={n.name} className='mt-5'>

              {n.codes.map((i, index) => {
                return (

                  <Fieldset legend={i.file} key={i.code + index}>
                    <Editor
                      language={i.language}
                      value={i.code}
                      theme='vs-dark'
                      className='resize'
                      beforeMount={handleEditorWillMount}
                      onMount={handleEditorDidMount}
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