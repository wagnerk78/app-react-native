/* eslint-disable prettier/prettier */
/* eslint-disable no-alert */

import React from 'react';
import {Title, Box, Text, Button, Spacer, Input} from '../../components/index.js';

const SignUp = ({navigation}) => {
  return (
    <Box justify="center" hasPadding align="center" background="light">
      <Title bold>Create new account.</Title>
      <Spacer />
      <Text>Enter your details below:</Text>
      <Spacer size="50px"/>
      <Input  placeholder="Name"/>
      <Spacer />
      <Input  placeholder="E-mail"/>
      <Spacer />
      <Input  placeholder="Password" secureTextEntry/>
      <Spacer size="50px"/>
      <Button block>
        <Text color="light">Create new account</Text>
      </Button>
      <Spacer size="40px"/>
      <Text  onPress={() => navigation.navigate('SignIn')}>Back to signIn</Text>


    </Box>
  );
};

export default SignUp;
