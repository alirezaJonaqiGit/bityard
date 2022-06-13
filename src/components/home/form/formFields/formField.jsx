import React from "react";
import { useForm } from "react-hook-form";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
// import './form.css'
import { useEffect, useRef, useState  } from 'react';
import axios from "axios";

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
    

    // send request to server
    // body sample: 
    // {
    //     "pair":"BTC-USDT",
    //     "type":"limit",
    //     "side":"bid",
    //     "amount":"0.056",
    //     "price":54000
    // }

    const sendXHR = (body) => {
        let request = axios.post('http://192.168.115.57:3000/orders', body)
        
        // we dont need response, listening to socket 
        // request.then((response) => {
        
        // });
    }


    // handle Submit
    const submitForm = (data) => {
        
        // get the side from props
        data.side = props.status;
        // console.log(data)
        sendXHR({...data, type: 'limit', pair: 'BTC-USDT'});
    };

    // classess
    const classes = useStyles();

    const PriceTextField = useRef();
    const AmountTextField = useRef();


    return ( 
        <>
            <form className="px-2" onSubmit={handleSubmit(submitForm)}>
        
                <div className="d-flex flex-nowrap">
                    <span style={{ width: '80px', marginRight: '1rem', fontWeight: 'bold' }} className="d-block align-self-center" >
                        Price:
                    </span>
                    <TextField defaultValue={50000} ref={PriceTextField} className={classes.textField} {...register(`price`)} id="outlined-basic" variant="filled" />
                </div>

                <div className="d-flex flex-nowrap">
                    <span style={{ width: '80px', marginRight: '1rem', fontWeight: 'bold' }} className="d-block align-self-center" >
                        Amount:
                    </span>
                    <TextField defaultValue={''} placeholder={'amount'} ref={AmountTextField} className={classes.textField} {...register(`amount`)} id="outlined-basic" variant="filled" />
                </div>

                <input className="submit" type="submit" value={`${props.status === 'ask' ? 'Buy' : 'Sell'} BTC`} />
            </form>  
        </>
    );
}

export default FormFields;
