import React from 'react'
import TableRow from './TableRow'
import TableFooter from './TableFooter'

const headers = [
  {id: 'date', name: "Created"},
  {id: 'orderNumber', name: "Number"},
  {id: 'customer', name: "Customer"}, 
  {id: 'reference', name: "Reference"}, 
  {id: 'due', name: "Due"}, 
  {id: 'total', name: "Total"}, 
  {id: 'status', name: "Status"}]

const TableView = props => {
  return (
    <div className='mt-3 mx-auto'>
      <div className="row flex-nowrap">
        <TableRow header={true} data={headers} key='header' handleClick={id => props.handleClick(id)}/>
      </div>
      {/* Getting a key warning here, unsure why */}
      { props.data.map(i => <TableRow key={i.id} data={i} />) }
      <TableFooter />
    </div>
  )
}

export default TableView