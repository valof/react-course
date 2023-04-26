import React from 'react';
import { useParams } from "react-router-dom";

const ItemPage = (props) => {

    let x = useParams(); 

    console.log(props);
    return (
        <div>
            This page is of item {x.id}
        </div>
    );
};

export default ItemPage;
