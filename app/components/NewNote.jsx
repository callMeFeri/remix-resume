import styles from './NewNote.css';

import {Form,useTransition as useNavigation,useActionData} from '@remix-run/react'//this is for preventing the page from reloading

function NewNote() {
  const data=useActionData()//gives me the access the data provided by action function in notes.js|in fact it gives me the latest data returned by anything
  const navigation=useNavigation();
  const isSubmitting=navigation.state==='submitting'
  return (
    <Form method="post" id="note-form">
      {data?.message &&<p className='error'>{data.message}</p>}
      <p>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" required />
      </p>
      <p>
        <label htmlFor="content">Content</label>
        <textarea id="content" name="content" rows="5" required />
      </p>
      <div className="form-actions">
        <button disabled={isSubmitting}>{isSubmitting ?"Adding The Note...":"Add Note"}</button>
      </div>
    </Form>
  );
}

export default NewNote;

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}
