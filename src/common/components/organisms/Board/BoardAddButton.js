import React from 'react';
import {useHistory} from 'react-router-dom';
import MaterialButton from 'common/components/atoms/Button/MaterialButton';

const BoardAddButton = () => {

  const history = useHistory();

  const MoveBoardForm = () => {
    history.push('/boards/form');
  }

  return(
    <MaterialButton variant="contained" color="default" onClick={MoveBoardForm}>Add</MaterialButton>
  );
}

export default BoardAddButton;