import React from 'react';
import { useParams } from "react-router-dom";

const EditExpensedPage = (props) => {

    let x = useParams(); 

    console.log(props);
    return (
        <div>
            This is my Edit expense page, parameter {x.id}
        </div>
    );
};

export default EditExpensedPage;
