const apiWrapper = () => {
  const baseUrl = 'http://localhost:3001/invoices'

  const requestBuilder = (args) => {
    let reqString = baseUrl+'?';
    let searchParams = new URLSearchParams()
    for(let key in args){
      searchParams.append(key, args[key])
    }
    return reqString + searchParams.toString()
  }

  const getAllResults = () => fetch(baseUrl).then(response => response.json())

  const getPagedResults = (_limit, _page) => fetch(requestBuilder({_limit, _page})).then(response => response.json())

  const getSortedResults = (_sort, _order, _limit, _page) => fetch(requestBuilder({_sort, _order, _limit, _page})).then(response => response.json())

  // TODO: methods for filtered, sorted, paginated, etc.

  return {
    // Callable methods
    getAllResults,
    getPagedResults,
    getSortedResults
  }
}

export default apiWrapper