import React from 'react';
import classes from './Spinner.module.css';

const spinner = () => {
    return (
        <div>
             <div className={classes.Loader}>
             </div>
             <h4 style={{textAlign:"center"}}>Loading data...</h4>
        </div>
       
    )
}

export default spinner;