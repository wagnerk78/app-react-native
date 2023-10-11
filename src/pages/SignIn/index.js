/* eslint-disable prettier/prettier */
/* eslint-disable no-alert */

import React from 'react';
import {Title, Box, Text, Button, Spacer, Input} from '../../components/index.js';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const SignIn = ({navigation}) => {
  return (
    <Box justify="center" hasPadding align="center" background="light">
       <Icon name="rocket" size={30} color="#900" />
       <Title color="black" variant="big" bold>LOOKAPP</Title>
       <Spacer size="30px"/>
      <Title bold>SignIn my account.</Title>
      <Spacer />
      <Spacer size="50px"/>
      <Input  placeholder="E-mail"/>
      <Spacer />
      <Input  placeholder="Password" secureTextEntry/>
      <Spacer size="50px"/>
      <Button block  onPress={() => navigation.navigate('Feed')}>
        <Text color="light">SignIn into my account</Text>
      </Button>
      <Spacer size="40px"/>
      <Text  onPress={() => navigation.navigate('SignUp')}>Create new account</Text>


    </Box>
  );
};

export default SignIn;
