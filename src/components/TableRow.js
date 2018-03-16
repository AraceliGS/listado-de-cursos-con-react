import React from 'react';
import TableColumn from './TableColumn'

const TableRow = ({arrayOfItems}) => {
  return (
    <tr>
      {arrayOfItems.map(el => <TableColumn item={el} key={el}/>)}
    </tr>
  )
}

export default TableRow;