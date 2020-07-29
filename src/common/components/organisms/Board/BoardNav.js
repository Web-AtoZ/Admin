import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import MaterialButton from 'common/components/atoms/Button/MaterialButton';

const BoardNav = ({onClickUpdate, onClickDelete}) => {
  return (
      <ButtonGroup size="small" color="primary" aria-label="outlined primary button group">
        <MaterialButton onClick={onClickUpdate}>Update</MaterialButton>
        <MaterialButton onClick={onClickDelete}>Delete</MaterialButton>
      </ButtonGroup>
  )
}

export default BoardNav;