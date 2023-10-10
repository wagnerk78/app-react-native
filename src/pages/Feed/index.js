/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
import React from 'react';
import { Box, Spacer, ScrollView } from '../../components/index.js';
import Header from '../../components/Header';
import StoryList from '../../components/Story/list.js';
import PostList from '../../components/Post/list.js';

const Feed = () => {
  return (
    <Box background="light">
      <Header title={'Explore'} />
      <ScrollView>
        <StoryList />
        <Spacer />
        <PostList />
      </ScrollView>
    </Box>
  );
};

export default Feed;