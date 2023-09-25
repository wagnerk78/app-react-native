/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
import React from 'react';
import {Box} from '../../components/index.js';
import Header from '../../components/Header';
import StoryList from '../../components/Story/list.js';

const Feed = () => {
  return (
  <Box backgraound="light">
    <Header title={'Explore'}/>
    <StoryList />
  </Box>
  );
};

export default Feed;