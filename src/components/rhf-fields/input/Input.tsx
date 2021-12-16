import React from 'react';
import { TextField as Input, TextFieldProps } from '@material-ui/core';
import { UseControllerReturn } from 'react-hook-form';

type IProps = TextFieldProps & {
    field: UseControllerReturn['field'];
};

export const RHFInput = ({ field, ...rest }: IProps) => {
    const handleChange = (e: React.BaseSyntheticEvent) => field.onChange(e.target.value);

    return (
        <Input
            value={field.value || ''}
            style={{ borderRadius: '5px' }}
            className="w-full"
            onChange={handleChange}
            InputLabelProps={{
                shrink: true,
                style: {
                    color: 'rgb(107, 114, 128)',
                },
            }}
            {...rest}
        />
    );
};
