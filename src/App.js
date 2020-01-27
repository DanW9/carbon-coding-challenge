import React, { useEffect, useState } from 'react';
import apiWrapper from './apiWrapper';
import TableView from './Components/TableView';

const api = apiWrapper()

function App() {
  // Initialise a data object in state
  // This will be used to hold the API response
  const [data, setData] = useState({
    apiData: [{id:0}],
    filter: '',
    sort: '',
    order: 'asc',
    limit: 5,
    page: 1
  })

  // Hook into lifecycle event to pull data on load
  useEffect(() => {
    // TODO: only pull back what we need. 2 pages at a time?
    // TODO: Add sorting
    api.getPagedResults(5, 1).then(result => {
      setData({
        ...data,
        apiData: result
      });
    })
    // Linter is insisting on creating an infinite loop here, no thanks linter!
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const sortData = id => {
    // If new ID, reset to ascending
    // Otherwise, flip to descending
    const sortOrder = (id === data.sort) && data.order === 'asc' ? 'desc' : 'asc'

    api.getSortedResults(id, sortOrder, data.limit, data.page).then(result => {
      setData({
        ...data,
        apiData: result,
        sort: id,
        order: sortOrder
      })
    })
  }

  return (
    <div className="d-flex align-items-center">
      <TableView data={data.apiData} handleClick={sortData} />
    </div>
  );
}

export default App;
