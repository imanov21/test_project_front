import { Button, IconButton, InputAdornment, Icon } from '@material-ui/core';
import { Controller, useFormContext } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { RHFInput } from '../rhf-fields/input/Input';
import RHFPasswordInput from '../rhf-fields/passw-input/PasswordInput';

export default function AuthForm() {
    const {
        control,
        formState: { errors },
    } = useFormContext();

    return (
        <>
            <Controller
                control={control}
                name="username"
                render={props => (
                    <RHFInput
                        field={props.field}
                        variant="outlined"
                        className="mb-10"
                        type="text"
                        label="Username"
                        required
                    />
                )}
            />
            <p className="m-5 text-red-500">{errors?.username?.message}</p>
            <Controller
                control={control}
                name="password"
                render={props => <RHFPasswordInput {...props} />}
            />

            <Button
                type="submit"
                variant="contained"
                color="primary"
                className="w-full mx-auto mt-16 normal-case"
                aria-label="LOG IN"
                value="legacy"
            >
                Submit
            </Button>
        </>
    );
}
