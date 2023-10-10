/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
import React from 'react';
import {Box} from '../index.js';
import Post from './index.js';


const PostList = () => {
  return (
    <Box>
        {Array.from(Array(20))?.map(item => (
        <Post />
        ))}
    </Box>
  );
};

export default PostList;