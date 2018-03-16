import React from 'react';
import TableRow from './TableRow'

const Table = ({infoTable}) => {
  return (
    <table>
      <tbody>
        {infoTable.map((array, index) => <TableRow arrayOfItems={array}  key={index}
          />
        )}
      </tbody>
    </table>
  )
}

export default Table;