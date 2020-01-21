import React from 'react'
import TableRow from './TableRow'

const headers = [
  {id: 'date', name: "Created"},
  {id: 'orderNumber', name: "Number"},
  {id: 'customer', name: "Customer"}, 
  {id: 'reference', name: "Reference"}, 
  {id: 'due', name: "Due"}, 
  {id: 'total', name: "Total"}, 
  {id: 'status', name: "Status"}]

const TableView = props => {
  const handleClick = id => {
    console.log(id)
  }

  return (
    <div className='container mt-3'>
      <div className="row">
        <TableRow header={true} data={headers} key='header' handleClick={handleClick}/>
      </div>
      {/* Getting a key warning here, unsure why */}
      { props.data.map(i => <TableRow key={i.id} data={i} />) }
      {/* Footer component */}
    </div>
  )
}

export default TableView