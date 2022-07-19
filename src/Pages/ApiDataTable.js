import axios from 'axios';
import { result } from 'lodash';
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import ReactPaginate from 'react-paginate';
import { sortingData } from '../CommmenFunction';
import data from "../MOCK_DATA.json"
import './apidatatable.css'


export default function Api() {
    
const [userlist,setUserlist] = useState([]);
const [filterdata, setFilterdata] = useState([]);

    useEffect (() => {
        axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then((res) => {
          setUserlist(res.data);
          setFilterdata(res.data);
        })
        .catch((err) => console.log(err));
    },[]);

    const column = [
      {
        name: "Id",
        selector: (row) => row.id,
      },

      {
        name: "Userid",
        selector: (row) => row.userId,
      },

      {
        name: "Title",
        selector: (row) => row.title,
      },
    ];



    // =======sorting=========
    const [orederType, setOrderType] = useState(true)
    const [finalData, setFinalData] = useState(data)
const handleClickHead=(heading)=>{
  setOrderType(!orederType)
 const result = sortingData(heading, data, orederType)
setFinalData(result)
}
  //  =======search======
  const [search, setSearch] = useState("")

//=====paginate=====
const [currentPage, setCurrentPage] = useState(0)
const itemsPerPage = 5;
const startNumber = itemsPerPage * currentPage;
const showData = finalData.slice(startNumber, startNumber + itemsPerPage);

const pageChange=({selected})=>{
  console.log(selected, "the selected is")
  setCurrentPage(selected)
}
const pageCount = Math.ceil(finalData.length / itemsPerPage)
  return (
    <div>
      {/* <DataTable
      columns = {column}
      data = {filterdata}
      pagination
      title = "Data"
      fixedHeader
      subHeader
      subHeaderComponent={
        <input
        type="text"
        className='form-control'
        style={{width: "200px"}}
        placeholder = 'search data'
        onChange={(e) => setSearch(e.target.value)}
        />
      }
      /> */}
      <input type="text" className='form-control' onChange={(e)=>setSearch(e.target.value)} style={{width:'200px', marginLeft:'20px'}}/>
      <table className='table'>
        <thead>
            <tr>
                <th>s.no</th>
                <th onClick={()=>handleClickHead('first_name')}>First_name</th>
                <th onClick={()=>handleClickHead('last_name')}>Last_name </th>
                <th onClick={()=>handleClickHead('email')}>email</th>
            </tr>
            </thead>
            <tbody>
            {showData?.filter(res => res.first_name.toLowerCase().includes(search)).map((res, index)=>{
                return(
                    <>
                    <tr>
                        <td>{index + 1}</td>
                        <td>{res.first_name}</td>
                        <td>{res.last_name}</td>
                        <td>{res.email}</td>
                    </tr>
                    </>
                )
            })}
            </tbody>
            
        </table> 
        <ReactPaginate
        previousLabel="previous"
        nextLabel="next"
        onPageChange={pageChange}
       pageCount={pageCount}
       containerClassName="paginationButton"
       previousAriaLabel='previosButtons'
       nextClassName='nextButtons'
       activeClassName='active-pagination'
        
        
        />


    </div>
  )
}

