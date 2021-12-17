import React, { useEffect, useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { useStore } from 'effector-react';
import { $videoStore } from 'store/video';
import { fetchFavoritesList } from 'store/favorites/effects';
import { $authStore } from 'store/auth';
import { fetchVideoList } from 'store/video/effects';
import { Video } from 'store/shared/interfaces';
import { VideoMini } from '../VideoMini/VideoMini';
import { useStyles } from './styles';

const container = {
    wrapper: 'grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 2xl:gap-10',
};

export const VideoBox = (props: { title: string; list?: Video[]; option?: string }) => {
    const classes = useStyles();
    const { list } = useStore($videoStore);
    const user = useStore($authStore);
    const showList = props.list;

    console.log('list', list);
    console.log('user', user);
    console.log('showList', showList);

    useEffect(() => {
        console.log('props.option === "favorites"', props.option === 'favorites');

        if (props.option === 'favorites') {
            user && fetchFavoritesList(user.id);
        }
    }, []);

    return (
        <div className={classes.container}>
            <h1 className={classes.title}>{props.title}</h1>
            <div className={`${classes.thumbsWrapper} ${container.wrapper}`}>
                {showList
                    ? showList.map(item => {
                          if (props.option === 'genres') {
                              return (
                                  item.genre === props.title && (
                                      <VideoMini key={item.id} {...item} />
                                  )
                              );
                          }

                          return <VideoMini key={item.id} {...item} />;
                      })
                    : list.map(item => {
                          if (props.option === 'favorites' && user) {
                              return (
                                  user.favorites.includes(item.id) && (
                                      <VideoMini key={item.id} {...item} />
                                  )
                              );
                          }

                          return null;
                      })}
            </div>
        </div>
    );
};
