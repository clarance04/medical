import React, { useEffect, useState } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css'
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css'
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css'
// import ToolkitProvider, { CSVExport } from 'react-bootstrap-table2-toolkit';
import jsPDF from 'jspdf';




export default function GetApi() {

  

    const [userlist,setUserlist] = useState([]);

    // const { ExportCSVButton } = CSVExport;

    // const MyExportCSV = (props) => {
    //     const handleClick = () => {
    //         props.onExport();
    //     };
    //     return (
    //         <div>
    //             <button className='btn btn-success' onClick={handleClick}>Export to CSV</button>
    //         </div>
    //     );
    //     };

    const columns = [
                {dataField :"id", text: "Id"},
                {dataField :"name", text: "Name", sort: true, filter : textFilter()},
                {dataField :"username", text: "Username", sort: true,filter : textFilter()},
                {dataField :"email", text: "Email", sort: true,filter : textFilter()}
    ]

    const pagination = paginationFactory({
        page: 1,
        sizePerPage: 5,
        nextPageText: '>>',
        firstPageText: '<<',
        nextPageText: '>',
        prePageText: '<',
        showTotal: true,
        alwaysShowAllBtns: true,
        onPageChange: function(page, sizePerPage) {
            console.log('page', page);
            console.log('sizePerPage', sizePerPage);
        },
        onSizePerPageChange: function (page, sizePerPage) {
            console.log('page', page)
            console.log('sizePerPage', sizePerPage);
        }

    })



    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(result => setUserlist(result))
        .catch(error => console.log(error))
    }, [])

  return (
    <div>

     {/* <ToolkitProvider
        bootstrap4
        keyField="id"
        data={userlist}
        columns={columns}
        exportCSV
    >
        {
            props => (
                 <React.Fragment>
                    <MyExportCSV {...props.csvProps} /> */}
                    <BootstrapTable 
                           bootstrap4 
                           keyField='id' 
                           columns={columns} 
                           data={userlist}
                        pagination ={pagination}
                        filter={filterFactory()}
                        />
                    {/* //     {...props.baseProps}
                    /> */}
                    {/* </React.Fragment>
                )
            }
        
      </ToolkitProvider> */}


        {/* <table>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
            </tr>
            {
                userlist && userlist.length> 0 ?
                userlist.map(usr => 
                    <tr>
                        <td>{usr.id}</td>
                        <td>{usr.name}</td>
                        <td>{usr.username}</td>
                        <td>{usr.email}</td>
                    </tr>
                    )
                    :"Loading"
            }

        </table> */}
    </div>
  )
}

