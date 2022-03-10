import TextField from '@mui/material/TextField';

import { Controller } from "react-hook-form";

const FormTextField = ({ name, control, label }) => {
  return (
        <Controller
        name={name}
        control={control}
        defaultValue={""}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            style={{width: "100%"}} 
            onChange={onChange}
            value={value}
            label={label} 
            error={!!error}
            helperText={error ? error.message : null}
            multiline
            />
        )}
        rules={{ required: label+ " is required" }}
        />
    )
};

export default FormTextField;