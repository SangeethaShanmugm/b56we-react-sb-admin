import React from "react";

function Card() {
    const data = [
        {
            color: "primary",
            text: "Earnings (Monthly)",
            price: "$40,000",
            icon: "fa-calendar",
        },
        {
            color: "success",
            text: "Earnings (Annual)",
            price: " $215,000",
            icon: "fa-dollar-sign",
        },
        {
            color: "info",
            text: "Tasks",
            price: "50%",
            icon: "fa-clipboard-list",
        },
        {
            color: "warning",
            text: "Pending Requests",
            price: "18",
            icon: "fa-comments",
        },
    ];

    return (
        <div>
            <div class="row">
                {data.map((item, index) => {
                    return (
                        <div key={index} class="col-xl-3 col-md-6 mb-4">
                            <div class={`card border-left-${item.color} shadow h-100 py-2`}>
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class={`text-xs font-weight-bold text-${item.color} text-uppercase mb-1`}>
                                                {item.text}
                                            </div>
                                            <div class="h5 mb-0 font-weight-bold text-gray-800">
                                                {item.price}
                                            </div>
                                        </div>
                                        <div class="col-auto">
                                            <i class={`fas ${item.icon} fa-2x text-gray-300`}></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}

                {/* <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-success shadow h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                        Earnings (Annual)
                                    </div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800">
                                        $215,000
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-info shadow h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-xs font-weight-bold text-info text-uppercase mb-1">
                                        Tasks
                                    </div>
                                    <div class="row no-gutters align-items-center">
                                        <div class="col-auto">
                                            <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                                                50%
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="progress progress-sm mr-2">
                                                <div
                                                    class="progress-bar bg-info"
                                                    role="progressbar"
                                                    style={{ width: "50%" }}
                                                    aria-valuenow="50"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-warning shadow h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                        Pending Requests
                                    </div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800">18</div>
                                </div>
                                <div class="col-auto">
                                    <i class="fas fa-comments fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default Card;
