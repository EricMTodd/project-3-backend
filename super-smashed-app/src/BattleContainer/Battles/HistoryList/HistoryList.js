import React, { Component } from "react";


const HistoryList = (props) => {
    const fullHistory = props.history.map((history, index) => {
        return (
            <div className="fullHistory" >
                <li key={history._id} >
                    {history}
                </li>
            </div>
        )
    })
    return (
        <div>
            {fullHistory}
        </div>
    )
}


export default HistoryList;