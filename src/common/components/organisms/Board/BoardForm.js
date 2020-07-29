import React,{useState} from 'react';
import { useForm } from 'react-hook-form';
import {observer} from 'mobx-react';
import useStores from 'useStores';
import {useHistory} from 'react-router-dom';
import ReactQuill from 'react-quill';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import 'react-quill/dist/quill.snow.css';
import 'Util/css/quill.css'

const BoardForm = observer(() => {
  const [value, setValue] = useState('');
  const {boardStore:{save}} = useStores();
  const {register, handleSubmit, errors} =useForm();
  const history = useHistory();
  
  const onSubmit = data => {
    const form = {...data, content:value};
    save(form)
      .then(history.push('/boards'))
      .catch(e=>console.log(e.message));
  }

  return(
    <>
      <TextField
          id="standard-full-width"
          label="Title"
          InputLabelProps={{shrink: true}}
          name='title'
          placeholder="제목"
          fullWidth
          margin="normal"
          inputRef={register({required: true})}
          error={errors.title ? true : false}
          helperText={errors.title ? "Required title" : ""}
      />
      <Editor>
        <ReactQuill name='content' theme="snow" value={value} onChange={setValue}/>
      </Editor>
      <input type='hidden' name='user_id' ref={register({required:true})} value={1}/>
      <input type='hidden' name='option_id' ref={register({required:true})} value={1}/>
      <Button variant="contained" color="primary" onClick={handleSubmit(onSubmit)}>제출</Button>
    </>
  );
})

export default BoardForm;

const Editor = styled('div')`
  margin-top: 10px;
  margin-bottom: 20px;
`