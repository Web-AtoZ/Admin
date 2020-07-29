import React, {useState, useCallback} from 'react';
import TextField from '@material-ui/core/TextField';
import 'react-quill/dist/quill.snow.css';
import 'Util/css/quill.css'
import useStores from 'useStores';
import ReactQuill from 'react-quill';
import {observer} from 'mobx-react';
import BoardNav from './BoardNav';
import Button from '@material-ui/core/Button';
import { useForm } from 'react-hook-form';
import {useParams, useHistory} from 'react-router-dom';
import styled from 'styled-components';

const BoardFormContainer = observer(({type}) => {
  const {boardStore:{board, updateBoard, save}} = useStores();
  const {register, handleSubmit, errors} =useForm();
  const params = useParams();  
  const history = useHistory();
  const [isWrite, changeMode] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const updateMode = useCallback(() => {
    changeMode(!isWrite);
    setTitle(board.title);
    setContent(board.content);
  },[board.content, board.title, isWrite]);

  const deleteBoard= useCallback(() => {
    console.log('hello');
  },[]);
  
  const onUpdate = useCallback(data => {
    const form = {...board, ...data, content: content}
    updateBoard(params.id, form);
    changeMode(false);
  },[board, content, params.id, updateBoard]);

  const onSave = useCallback(data => {
    const form = {...data, content: content};
    save(form)
      .then(history.push('/boards'))
      .catch(e=>console.log(e.message));
  },[content, history, save]);
  
  return (
    <>
      <BoardNav onClickUpdate={updateMode} onClickDelete={deleteBoard}/>
      <TextField
        id="standard-title-input"
        label="Title"
        name='title'
        fullWidth
        margin="normal"
        value={isWrite ? title : board.title}
        inputRef={register({required: true})}
        InputProps={isWrite ? null : {readOnly: true,}}
        onChange={({target:{value}})=> setTitle(value)}
        error={errors.title ? true : false}
        helperText={errors.title ? "Required title" : ""}
      />
      <input type='hidden' name='user_id' ref={register({required:true})} value={1}/>
      <input type='hidden' name='option_id' ref={register({required:true})} value={1}/>
      {isWrite ? <>
                  <Editor>
                    <ReactQuill name='content' theme="snow" value={content} onChange={setContent}/>
                  </Editor>
                  <Button variant="contained" color="primary" onClick={type==='form' ? handleSubmit(onSave) : handleSubmit(onUpdate)}>제출</Button>
                </>
                : 
                <Editor>
                  <ReactQuill name='content' theme="bubble" value={board.content} readOnly/>
                </Editor>
      }
    </>
  );
})

export default BoardFormContainer;

const Editor = styled('div')`
  margin-top: 10px;
  margin-bottom: 20px;
`