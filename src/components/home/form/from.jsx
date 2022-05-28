import React from "react";
import { useForm } from "react-hook-form";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './form.css'
import FormField from "./formFields/formField";
import { useState } from "react";


const useStyles = makeStyles((theme) => ({
    textField: {
        width: '100%',
        margin: '1rem 0',
        
    },
    formLabel : {
        fontSize: '1rem',
        fontWeight: 'bold',
        color: '#00c76f',
        margin: '0 0 1rem'
    }
}));

function Forms() {

    // set Current Price
    const [price, setPrice] = useState(0);
    const classes = useStyles();

    
    return ( 
        <>
            <div className="formsWrapper container-fluid">
                <div className="row">

                    <div className="col-6 px-2 b">
                        <h4 className={classes.formLabel}>Buy BTC</h4>
                        <FormField currentPrice={price} status={'Buy'} />
                    </div>

                    <div className="col-6 px-2 b">
                        <h4 style={{ color: '#fd374b' }} className={classes.formLabel}>Sell BTC</h4>
                        <FormField currentPrice={price} status={'Sell'} />
                    </div>
                    
                </div>
            </div>
        </>
    );
}

export default Forms;