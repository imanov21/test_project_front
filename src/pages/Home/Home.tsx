import React, { useEffect, useState } from 'react';
import { VideoBox } from '../../components/VideoBox/VideoBox';
import { useStyles } from './styles';

export const Home = (props: any) => {
    const cards = [
        {
            title: 'Films',
        },
        {
            title: 'Serials',
        },
    ];

    const classes = useStyles();

    return (
        <div className={classes.root}>
            {cards.map((card: any) => (
                <VideoBox {...card} />
            ))}
        </div>
    );
};
