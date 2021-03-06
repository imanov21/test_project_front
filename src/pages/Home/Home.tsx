import React, { useEffect, useState } from 'react';
import { useStore } from 'effector-react';
import { v4 as uuid } from 'uuid';
import { $videoStore } from 'store/video';
import { fetchVideoList } from 'store/video/effects';
import { VideoBox } from '../../components/VideoBox/VideoBox';
import { useStyles } from './styles';

export const Home = (props: any) => {
    const cards = ['ACTION', 'FANTASY', 'SCIENCE'];
    const { list } = useStore($videoStore);

    const classes = useStyles();

    useEffect(() => {
        fetchVideoList();
    }, []);

    return (
        <div className={classes.root}>
            {cards.map((card: any) => (
                <VideoBox key={uuid()} title={card} list={list} option="genres" />
            ))}
        </div>
    );
};
