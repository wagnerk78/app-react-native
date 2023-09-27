/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
import React from 'react';
import {Box, Text, ScrollView} from '../../components/index.js';
import Story from './index.js';

const StoryList = () => {
  return (
  <Box fluid>
    <Box row fluid justify="space-between" height="60px" hasPadding>
    <Text bold color="dark">Stories</Text>
    <Text color="danger">Show All</Text>
    </Box>
    <ScrollView horizontal>
        {Array.from(Array(20))?.map(item => (
        <Story />
        ))}
    </ScrollView>
  </Box>
  );
};

export default StoryList;