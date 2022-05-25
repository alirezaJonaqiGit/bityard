import React from "react";
import { useForm } from "react-hook-form";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './form.css'


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
    // <div className=""> </div>

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const buyBTCSubmit = (data) => {
        console.log(data);
    };
    const sellBTCSubmit = (data) => {
        console.log(data)
    };
    const classes = useStyles();

    return ( 
        <>
            <div className="formsWrapper container-fluid">
                <div className="row">
                    <div className="col-6 px-2 b">

                        <h4 className={classes.formLabel}>Buy BTC</h4>
                        <form className="px-2" onSubmit={handleSubmit(buyBTCSubmit)}>
                            <div className="d-flex flex-nowrap">
                                <span style={{width: '80px',marginRight: '1rem', fontWeight: 'bold'}} className="d-block align-self-center" >
                                    Price:
                                </span>
                                <TextField className={classes.textField} {...register("buyPrice")}  id="outlined-basic" variant="filled" />
                            </div>
                            
                            <div className="d-flex flex-nowrap">
                                <span style={{width: '80px',marginRight: '1rem', fontWeight: 'bold'}} className="d-block align-self-center" >
                                    Amount:
                                </span>
                                <TextField className={classes.textField} {...register("buyAmount")} id="outlined-basic" variant="filled" />
                            </div>

                            <input className="submit" type="submit" value='Buy BTC' />
                        </form>


                    </div>
                    <div className="col-6 px-2 b">
                        
                    <h4 style={{color: '#fd374b'}} className={classes.formLabel}>Sell BTC</h4>
                        <form className="px-2" onSubmit={handleSubmit(sellBTCSubmit)}>
                            <div className="d-flex flex-nowrap">
                                <span style={{width: '80px',marginRight: '1rem', fontWeight: 'bold'}} className="d-block align-self-center" >
                                    Price:
                                </span>
                                <TextField className={classes.textField}  {...register("sellPrice")} id="outlined-basic" variant="filled" />
                            </div>
                            
                            <div className="d-flex flex-nowrap">
                                <span style={{width: '80px',marginRight: '1rem', fontWeight: 'bold'}} className="d-block align-self-center" >
                                    Amount:
                                </span>
                                <TextField className={classes.textField} {...register("sellAmount")} id="" variant="filled" />
                            </div>

                            <input className="submit" type="submit" value='Sell BTC' />
                        </form>


                    </div>
                </div>
            </div>
        </>
    );
}

export default Forms;