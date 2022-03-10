import { useEffect } from "react";
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";

import FormTextField from './text-field';
import { Outergrid } from "../styled/Outergrid.style";
import { Griditem } from "../styled/Griditem.style";

 const Form = ({onSubmit, isNew = true, formFields, data, form}) => {
     
    const { handleSubmit, reset, control } = form;

    useEffect(() => {
        reset(data);
    }, [data]);

    return (
        <Outergrid rowGap={3} mtlarge={1}>
            <Griditem>
                <Typography variant="h4">{isNew ? "Add a new Post" : "Post #"+data?.id}</Typography>
            </Griditem>
        {formFields.map(function(formField, _){
        return(
            <Griditem key={ formField.name } style={{ width:"50vw" }}> 
                <FormTextField name={formField.name} control={control} label={formField.label} key={formField.name} />
            </Griditem>
        );
        })}
        <Button onClick={handleSubmit(() => {onSubmit()})}>Submit</Button>
        <Button onClick={() => reset(data)}>Reset</Button>
        </Outergrid>
    );
};

export default Form;