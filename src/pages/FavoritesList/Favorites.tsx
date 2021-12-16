import React, { useEffect, useState } from 'react';
import { VideoBox } from '../../components/VideoBox/VideoBox';
import { useStyles } from './styles';

export const Favorites = (props: any) => {
    const cards = [
        {
            title: 'favorites list',
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
