/* eslint-disable prettier/prettier */

import React from 'react';
import {Title, Box, Text, Button, Spacer} from '../../components/index.js';

const Home = ({ navigation }) => {
  return (
    <Box justify="center" hasPadding align="center" background="dark">
      <Box justify="center" fluid align="center" >
      <Title color="light" variant="big" bold>LOOKAPP</Title>
      <Spacer size="20px"/>
      <Text align="center" spacing="0px 20px">Stay on top of the fashion world and buy your favorite looks.</Text>
      </Box>
      <Box justify="flex-end" fluid align="center" >
      <Button block onPress={() => navigation.navigate('SignIn')}>
        <Text color="light">SigIn my account</Text>
      </Button>
      <Spacer size="20px"/>
      <Text underline color="light"  onPress={() => navigation.navigate('SignUp')} >Create new account</Text>
      <Spacer size="70px"/>
      </Box>

    </Box>
  );
};

export default Home;
