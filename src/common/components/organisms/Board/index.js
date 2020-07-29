import React from 'react';
import Table from 'common/components/atoms/Table/SimpleTable';
import MaterialButton from 'common/components/atoms/Button/MaterialButton';

const Board = () => {
  return(
    <>
      <MaterialButton variant="contained" color="default" >Add</MaterialButton>
      <Table/>
    </>
  );
}

export default Board;