import React, { useEffect, useState } from 'react';
import { useStore } from 'effector-react';
import { v4 as uuid } from 'uuid';
import { $filmStore } from 'store/films';
import { $serialsStore } from 'store/serials';
import { fetchVideoList } from 'store/video/effects';
import { fetchFilmsList } from 'store/films/effects';
import { fetchSerialsList } from 'store/serials/effects';
import { VideoBox } from '../../components/VideoBox/VideoBox';
import { useStyles } from './styles';

export const ListPage = ({ videoType }) => {
    const classes = useStyles();

    const getList = (videoType: string) => {
        let results;

        if (videoType === 'Films') {
            const { list } = useStore($filmStore);
            results = list;
        } else {
            const { list } = useStore($serialsStore);
            results = list;
        }

        return results;
    };

    const list = getList(videoType);

    useEffect(() => {
        videoType === 'Films' ? fetchFilmsList() : fetchSerialsList();
    }, [videoType]);

    return (
        <div className={classes.root}>
            <VideoBox key={uuid()} title={videoType} list={list} />
        </div>
    );
};
