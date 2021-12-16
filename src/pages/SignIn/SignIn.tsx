import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useForm, FormProvider } from 'react-hook-form';
import { Dialog } from '@material-ui/core';
import { loginFx } from 'store/auth/effects/login';
import AuthForm from 'components/auth-form/AuthForm';
import { useStyles } from './styles';
import history from '../../@history/index';

export const SignIn = () => {
    const classes = useStyles();
    const defaultValues = {
        email: '',
        password: '',
    };
    const methods = useForm({ defaultValues });

    const onSubmit = async (model: { username: string; password: string }) => {
        await loginFx(model);
        history.push('/');
    };

    return (
        <div>
            <Card className="w-full max-w-400 mx-auto m-16 md:m-0" square>
                <CardContent className="flex flex-col items-center justify-center p-32 md:p-48 md:pt-128 ">
                    <Typography variant="h6" className="md:w-full mb-32">
                        Login to your account
                    </Typography>
                    <FormProvider {...methods}>
                        <form
                            className="flex flex-col justify-center w-full"
                            onSubmit={methods.handleSubmit(onSubmit)}
                        >
                            <AuthForm />
                        </form>
                    </FormProvider>
                </CardContent>
            </Card>
        </div>
    );
};
