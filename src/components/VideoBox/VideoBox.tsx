import React, { useEffect, useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { VideoMini } from '../VideoMini/VideoMini';
import { useStyles } from './styles';

const container = {
    wrapper: 'grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 2xl:gap-10',
};

export const VideoBox = (props: { title: any | null | undefined }) => {
    const preventDefault = (event: { preventDefault: () => any }) => event.preventDefault();
    const classes = useStyles();
    const items = [
        {
            title: 'videoExample',
            description: '1.21',
        },
        {
            title: 'videoExample',
            description: '1.21',
        },
        {
            title: 'videoExample',
            description: '1.21',
        },
        {
            title: 'videoExample',
            description: '1.21',
        },
        {
            title: 'videoExample',
            description: '1.21',
        },
    ];
    return (
        <div className={classes.container}>
            <h1 className={classes.title}>Your {props.title} </h1>
            <div className={`${classes.thumbsWrapper} ${container.wrapper}`}>
                {items.map((item: any) => (
                    <VideoMini {...item} />
                ))}
            </div>
        </div>
    );
};
