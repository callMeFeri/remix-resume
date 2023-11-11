import { redirect } from '@remix-run/node';
import { getStoredNotes, storeNotes } from '~/data/notes';


import NewNote, { links as newNoteLinks } from '~/components/NewNote';
import NoteList,{links as noteListLinks} from '~/components/NoteList';

import { useLoaderData } from '@remix-run/react';

export default function NotesPage() {
  const notes=useLoaderData()
  return (
    <main>
      <NewNote />
      <NoteList notes={notes}/>
    </main>
  );
}

export function links() {
  return [...newNoteLinks(),...noteListLinks()];
}

//the name loader matters
export async function loader(){
 const notes= await getStoredNotes()//it will be be passed by returning it
 return notes;
 //return new Response(JSON.stringify(notes),{headers:{"Content-type":"application/json"}}) the above code does this
}

//the name action matters,async doesnt matter
export async function action({request}){
 const formData=await request.formData();
 const noteData={
  title:formData.get('title'),
  content:formData.get('content')
  // or we could do this bcz the input name are identical as object properties:
  //const noteData=Object.fromEntries(formData)
 }
 const existingNotes=await getStoredNotes()//it returns a promise
 noteData.id=new Date().toISOString()
 const updatedNotes=existingNotes.concat(noteData);
 await storeNotes(updatedNotes)
 return redirect('/notes')
}
