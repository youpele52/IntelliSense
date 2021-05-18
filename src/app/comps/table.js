import React from 'react'

export default function Table({ tableData }) {
  return (
    <div className='table'>
      <table className='data-table'>
        <caption className='table-name'>TK1 Table</caption>
        <thead>
          <tr>
            <th scope='col'>Metric</th>
            <th scope='col'>Value</th>
          </tr>
        </thead>
        <tbody>
          {/* show loading if table data is empty */}
          {tableData.length < 1 && (
            <tr>
              <td>"loading..."</td>
            </tr>
          )}
          {tableData.length > 1 &&
            tableData.map((entry, i) => {
              return (
                <tr key={`tr_d${i}`}>
                  <td>{entry[0]}</td>
                  {/* the last element in value array */}
                  <td>{entry[2][entry[2].length - 1]}</td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}
