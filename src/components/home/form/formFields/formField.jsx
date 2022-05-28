import React from "react";
import { useForm } from "react-hook-form";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
// import './form.css'
import { useEffect, useRef, useState  } from 'react';

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

function FormFields(props) {
    

    // Hook form
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    // handle Submit
    const submitForm = (data) => {
        data.price = props.currentPrice.toString();
        data.type = props.status;
        console.log(data);
    };

    // classess
    const classes = useStyles();
    

    const PriceTextField = useRef();
    const AmountTextField = useRef();
    // on component Update => empty fields
    useEffect(() => {
    });

    return ( 
        <>
            <form className="px-2" onSubmit={handleSubmit(submitForm)}>
                <div className="d-flex flex-nowrap">
                    <span style={{ width: '80px', marginRight: '1rem', fontWeight: 'bold' }} className="d-block align-self-center" >
                        Price:
                    </span>
                    <TextField ref={PriceTextField} value={props.currentPrice} className={classes.textField} {...register(`price`)} id="outlined-basic" variant="filled" />
                </div>

                <div className="d-flex flex-nowrap">
                    <span style={{ width: '80px', marginRight: '1rem', fontWeight: 'bold' }} className="d-block align-self-center" >
                        Amount:
                    </span>
                    <TextField defaultValue={0} ref={AmountTextField} className={classes.textField} {...register(`amount`)} id="outlined-basic" variant="filled" />
                </div>

                <input className="submit" type="submit" value={`${props.status} BTC`} />
            </form>  
        </>
    );
}

export default FormFields;