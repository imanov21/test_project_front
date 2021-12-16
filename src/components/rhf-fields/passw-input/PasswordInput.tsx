import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { IconButton, InputAdornment, Icon } from '@material-ui/core';
import { RHFInput } from '../input/Input';
import ErrorMessage from '../../error-message/ErrorMessage';

export default function RHFPasswordInput({ addIcon = false, field, ...rest }) {
    const {
        formState: { errors },
    } = useFormContext();

    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <RHFInput
                field={field}
                variant="outlined"
                className="mb-16"
                type="text"
                label="Password"
                InputProps={{
                    className: 'pr-2',
                    type: showPassword ? 'text' : 'password',
                }}
                required
                {...rest}
            />
            <ErrorMessage message={errors[`${field.name}`]?.message} />
        </>
    );
}
