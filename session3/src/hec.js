import React from "react";

function Menu(props){
    return(
    <div>
        <h1>refreshment center</h1>
        <p>our goal is to provide best meal to customer</p>
        <h4>today  list of items :</h4>
        <li>1:{props.dishname}</li>
        <li>2:{props.dishname}</li>
        <li>3:{props.dishname}</li>
        <li>4:{props.dishname}</li>
        <li>5:{props.dishname}</li>

    </div>
    );
}
export default Menu;