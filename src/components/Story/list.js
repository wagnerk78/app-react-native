/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
import React from 'react';
import {Box, Text, ScrollView} from '../../components/index.js';


const StoryList = () => {
  return (
  <Box fluid>
    <Box row fluid justify="space-between" height="60px" hasPadding>
    <Text bold color="dark" style={{letterSpacing: 3}}>Stories</Text>
    <Text color="danger">Show All</Text>
    </Box>
    <ScrollView horizontal>
        {Array.from(Array(15))?.map(item => (<Text>Story</Text>))}
    </ScrollView>
  </Box>
  );
};

export default StoryList;