import React from "react";

function Table() {
    const tableData = [
        {
            name: "Tiger Nixon",
            position: "System Architect",
            year: "2011/04/25",
            salary: "$320,800",
        },
        {
            name: "Tiger Nixon",
            position: "System Architect",
            year: "2011/04/25",
            salary: "$320,800",
        },
        {
            name: "Tiger Nixon",
            position: "System Architect",
            year: "2011/04/25",
            salary: "$320,800",
        },
        {
            name: "Tiger Nixon",
            position: "System Architect",
            year: "2011/04/25",
            salary: "$320,800",
        },
        {
            name: "Tiger Nixon",
            position: "System Architect",
            year: "2011/04/25",
            salary: "$320,800",
        },
        {
            name: "Tiger Nixon",
            position: "System Architect",
            year: "2011/04/25",
            salary: "$320,800",
        },
        {
            name: "Tiger Nixon",
            position: "System Architect",
            year: "2011/04/25",
            salary: "$320,800",
        },
    ];
    return (
        <div>
            <div class="container-fluid">
                <h1 class="h3 mb-2 text-gray-800">Tables</h1>
                <p class="mb-4">
                    DataTables is a third party plugin that is used to generate the demo
                    table below. For more information about DataTables, please visit the{" "}
                    <a target="_blank" href="https://datatables.net">
                        official DataTables documentation
                    </a>
                    .
                </p>

                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">
                            DataTables Example
                        </h6>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table
                                class="table table-bordered"
                                id="dataTable"
                                width="100%"
                                cellspacing="0"
                            >
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Position</th>
                                        <th>Year</th>
                                        <th>Salary</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {tableData.map((data) => {
                                        return (
                                            <>
                                                <tr>
                                                    <td>{data.name}</td>
                                                    <td>{data.position}</td>
                                                    <td>{data.year}</td>
                                                    <td>{data.salary}</td>
                                                </tr>
                                            </>
                                        )
                                    })}


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Table;
