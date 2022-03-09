import classes from "./form.module.css";

import { useEffect } from "react";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Typography } from "@mui/material";

import FormTextField from './text-field';


 const Form = ({onSubmit, isNew = true, formFields, data, form}) => {
     
    const { handleSubmit, reset, control } = form;

    useEffect(() => {
        reset(data);
    }, [data]);

    return (
        <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        className={classes.container}>
            <Grid item>
                <Typography variant="h4">{isNew ? "Add a new Post" : "Post #"+data?.id}</Typography>
            </Grid>
        {formFields.map(function(formField, index){
        return(
            <Grid item key={ formField.name } className={classes.formfield}> 
                <FormTextField name={formField.name} control={control} label={formField.label} key={formField.name} />
            </Grid>
        );
        })}
        <Button onClick={handleSubmit(() => {onSubmit()})}>Submit</Button>
        <Button onClick={() => reset(data)}>Reset</Button>
        </Grid>
    );
};

export default Form;