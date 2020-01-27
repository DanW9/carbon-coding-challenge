import React from 'react'
import moment from 'moment'
import '../Styles/TableRow.css';

export const setCustomStyle = id => {
  switch (id) {
    case 'due':
    case 'total':
      return 'col justify-content-end'
    case 'customer':
      return 'col-5'
    default:
      return 'col-1'
  }
}

export const formatData = (key, data) => {
  switch (key) {
    case 'date':
      return moment(data[key]).format('D MMM YY')
    case 'due':
    case 'total':
      return Number(data[key]).toFixed(2)
    default:
      return data[key]
  }
}

const TableRow= props => {

  const buildHeaderRow = data => data.map((val) => 
    <div className={'header d-flex align-items-center ' + setCustomStyle(val.id)} id={val.id} key={val.id} onClick={() => props.handleClick(val.id)}>{val.name}</div>)

  const buildRow = data => {
    const cols = []

    for (let i in data) {
      if (i !== 'id'){
        cols.push(<div className={'tablerow d-flex align-items-center '+setCustomStyle(i)} key={data[i].id}>{formatData(i, data)}</div>)
      }
    }

    return (
      <div className='row flex-nowrap'>
        { cols }
      </div>
    )
  }

  return props.header ? buildHeaderRow(props.data) : buildRow(props.data)
}

export default TableRow