/* eslint-disable prettier/prettier */
/* eslint-disable no-alert */
/* eslint-disable eol-last */
import React from 'react';
import { Touchable, Cover, Text, Box } from '../../components/index.js';
import Image from '../../image/cat.jpg';
import { colors } from '../../styles/theme.json';


const Story = () => {
  return (
    <Touchable
      onPress={() => alert('Teste')}
      background="black"
      radius="10px"
      height="190px"
      spacing="0px 5px 0px"
      width="150px"
    >
      <Cover source={Image} width="100%" height="100%">
        <Box hasPadding fluid justify="space-between" background={`${colors.dark}80`}>
          <Cover source={Image} 
          circle
          width="50px"
          height="50px"
          border={`1px solid ${colors.light}`}
          />
          <Box height="50px" justify="flex-end">
          <Text bold color="light"> Wagner Kroiss</Text>
          <Text color="light" variant="small">  2 mins ago</Text>
          </Box>
        </Box>
      </Cover>
    </Touchable>
  );
};

export default Story;